import os
import sqlite3
from flask import Flask, jsonify, redirect, render_template_string, request, session, url_for
from markupsafe import Markup

app = Flask(__name__)
app.secret_key = "training-secret-do-not-use-in-production"
DB_PATH = os.environ.get("UMBRAMARKET_DB", "/data/umbramarket.db")

STYLE = """
<style>
body{font-family:system-ui,sans-serif;max-width:920px;margin:40px auto;padding:0 20px;color:#172033}
nav{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:24px}a{color:#1d4ed8}code,pre{background:#f1f5f9;padding:2px 5px;border-radius:5px}.card{border:1px solid #dbe2ea;border-radius:12px;padding:18px;margin:14px 0}.muted{color:#64748b}input,button{font:inherit;padding:8px 10px;margin:4px 0}table{border-collapse:collapse;width:100%}td,th{border:1px solid #dbe2ea;padding:8px;text-align:left}.warn{border-left:4px solid #f59e0b;padding-left:12px}
</style>
"""


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = db()
    conn.executescript("""
    CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT, role TEXT);
    CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, name TEXT, description TEXT, price REAL);
    CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY, user_id INTEGER, item TEXT, total REAL, shipping_address TEXT);
    """)
    if conn.execute("SELECT COUNT(*) FROM users").fetchone()[0] == 0:
        conn.executemany("INSERT INTO users(id,username,password,role) VALUES(?,?,?,?)", [
            (1,"alice","Alice123!","customer"),
            (2,"bob","Bob123!","customer"),
            (3,"admin","Admin123!","admin"),
        ])
        conn.executemany("INSERT INTO products(id,name,description,price) VALUES(?,?,?,?)", [
            (1,"Umbra Lamp","Lampada smart da scrivania",49.90),
            (2,"Perugia Desk","Scrivania regolabile",299.00),
            (3,"Terni Chair","Sedia ergonomica",189.00),
            (4,"Spoleto Shelf","Libreria modulare",129.00),
        ])
        conn.executemany("INSERT INTO orders(id,user_id,item,total,shipping_address) VALUES(?,?,?,?,?)", [
            (1001,1,"Umbra Lamp",49.90,"Via del Corso 10, Perugia"),
            (1002,2,"Terni Chair",189.00,"Via Roma 22, Terni"),
            (1003,1,"Spoleto Shelf",129.00,"Via del Corso 10, Perugia"),
        ])
    conn.commit()
    conn.close()


def layout(title, body):
    user = session.get("username")
    nav = '<nav><a href="/">Home</a><a href="/search">Search</a><a href="/greet">Greet</a><a href="/api/health">API health</a>'
    if user:
        nav += '<a href="/dashboard">Dashboard</a><a href="/logout">Logout</a>'
    else:
        nav += '<a href="/login">Login</a>'
    nav += '</nav>'
    return f"<!doctype html><html><head><meta charset='utf-8'><title>{title}</title>{STYLE}</head><body>{nav}<h1>{title}</h1>{body}<hr><p class='muted'>UmbraMarket Guided Lab · intentionally vulnerable · localhost only</p></body></html>"


@app.get("/")
def home():
    conn = db()
    products = conn.execute("SELECT * FROM products ORDER BY id").fetchall()
    conn.close()
    rows = "".join(f"<tr><td>{p['id']}</td><td>{p['name']}</td><td>{p['price']:.2f} €</td></tr>" for p in products)
    return layout("UmbraMarket", f"<p>Applicazione didattica volutamente vulnerabile.</p><div class='card'><strong>Happy path:</strong> esplora i prodotti, accedi come Alice o Bob, osserva il dashboard e le API.</div><table><tr><th>ID</th><th>Prodotto</th><th>Prezzo</th></tr>{rows}</table>")


@app.route("/login", methods=["GET", "POST"])
def login():
    error = ""
    if request.method == "POST":
        conn = db()
        user = conn.execute("SELECT * FROM users WHERE username=? AND password=?", (request.form.get("username", ""), request.form.get("password", ""))).fetchone()
        conn.close()
        if user:
            session.clear()
            session.update(user_id=user["id"], username=user["username"], role=user["role"])
            return redirect(url_for("dashboard"))
        error = "<p class='warn'>Credenziali non valide.</p>"
    form = """
    <form method='post'>
      <label>Username<br><input name='username' autocomplete='off'></label><br>
      <label>Password<br><input name='password' type='password'></label><br>
      <button>Login</button>
    </form>
    <p class='muted'>Account didattici: alice / Alice123! · bob / Bob123! · admin / Admin123!</p>
    """
    return layout("Login", error + form)


@app.get("/logout")
def logout():
    session.clear()
    return redirect(url_for("home"))


@app.get("/dashboard")
def dashboard():
    if not session.get("user_id"):
        return redirect(url_for("login"))
    conn = db()
    orders = conn.execute("SELECT * FROM orders WHERE user_id=? ORDER BY id", (session["user_id"],)).fetchall()
    conn.close()
    rows = "".join(f"<tr><td><a href='/api/orders/{o['id']}'>{o['id']}</a></td><td>{o['item']}</td><td>{o['total']:.2f} €</td></tr>" for o in orders)
    return layout("Dashboard", f"<p>Autenticato come <strong>{session['username']}</strong> ({session['role']}).</p><table><tr><th>Order ID</th><th>Item</th><th>Total</th></tr>{rows}</table><div class='card'>Apri DevTools o un proxy e osserva come il browser identifica la sessione e gli oggetti.</div>")


@app.get("/search")
def search():
    q = request.args.get("q", "")
    results = []
    error = None
    if q:
        conn = db()
        # VULNERABLE BY DESIGN: SQL string concatenation for a local training lab.
        sql = f"SELECT id,name,description,price FROM products WHERE name LIKE '%{q}%'"
        try:
            results = conn.execute(sql).fetchall()
        except sqlite3.Error as exc:
            error = str(exc)
        finally:
            conn.close()
    form = "<form><input name='q' value='{}' placeholder='Cerca prodotto'><button>Cerca</button></form>".format(q.replace("'", "&#39;").replace('"', '&quot;'))
    body = form
    if error:
        body += f"<p class='warn'>Database error: <code>{error}</code></p>"
    if q and not error:
        body += f"<p>{len(results)} risultati.</p>" + "".join(f"<div class='card'><strong>{r['name']}</strong><br>{r['description']}<br>{r['price']:.2f} €</div>" for r in results)
    return layout("Product Search", body)


@app.get("/greet")
def greet():
    name = request.args.get("name", "studente")
    # VULNERABLE BY DESIGN: untrusted input rendered as markup in a local training lab.
    rendered = Markup(name)
    body = "<form><input name='name' placeholder='Nome'><button>Saluta</button></form>"
    body += f"<div class='card'>Ciao, {rendered}!</div>"
    return layout("Greeting Preview", body)


@app.get("/api/health")
def api_health():
    return jsonify(service="umbramarket-guided", version="1.0-lab", status="ok")


@app.get("/api/me")
def api_me():
    if not session.get("user_id"):
        return jsonify(error="authentication required"), 401
    return jsonify(id=session["user_id"], username=session["username"], role=session["role"])


@app.get("/api/orders")
def api_orders():
    if not session.get("user_id"):
        return jsonify(error="authentication required"), 401
    conn = db()
    rows = conn.execute("SELECT id,item,total FROM orders WHERE user_id=? ORDER BY id", (session["user_id"],)).fetchall()
    conn.close()
    return jsonify([dict(row) for row in rows])


@app.get("/api/orders/<int:order_id>")
def api_order(order_id):
    if not session.get("user_id"):
        return jsonify(error="authentication required"), 401
    conn = db()
    # VULNERABLE BY DESIGN: missing ownership check (BOLA/IDOR) for training.
    row = conn.execute("SELECT id,user_id,item,total,shipping_address FROM orders WHERE id=?", (order_id,)).fetchone()
    conn.close()
    if not row:
        return jsonify(error="not found"), 404
    return jsonify(dict(row))


@app.get("/api/admin/stats")
def api_admin_stats():
    if not session.get("user_id"):
        return jsonify(error="authentication required"), 401
    # VULNERABLE BY DESIGN: missing role check for training.
    conn = db()
    stats = {
        "users": conn.execute("SELECT COUNT(*) FROM users").fetchone()[0],
        "orders": conn.execute("SELECT COUNT(*) FROM orders").fetchone()[0],
        "revenue": conn.execute("SELECT ROUND(SUM(total),2) FROM orders").fetchone()[0],
    }
    conn.close()
    return jsonify(stats)


@app.after_request
def lab_headers(response):
    response.headers["X-Lab-Notice"] = "Intentionally vulnerable training target"
    response.headers["X-UmbraMarket-Environment"] = "training"
    return response


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=False)
