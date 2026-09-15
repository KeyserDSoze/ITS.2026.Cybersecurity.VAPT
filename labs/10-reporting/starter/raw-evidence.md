# Raw Evidence Pack — deliberately messy

## Note 14:32

Login Alice ok. Cookie session presente.

`GET /api/orders` -> 200

Response:

```json
[
  {"id":1001,"item":"Umbra Lamp","total":49.9},
  {"id":1003,"item":"Spoleto Shelf","total":129.0}
]
```

## Note 14:36

Provato manualmente ID 1002 perché mancava dalla lista Alice.

Request:

```http
GET /api/orders/1002 HTTP/1.1
Host: 127.0.0.1:5005
Cookie: session=<redacted>
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
```

```json
{
  "id": 1002,
  "user_id": 2,
  "item": "Terni Chair",
  "total": 189.0,
  "shipping_address": "Via Roma 22, Terni"
}
```

## Note 14:38

Verificato login Bob: `/api/orders` include 1002. Quindi 1002 appartiene a Bob.

## Nota sparsa

"IDOR critical??? api broken, sistemare endpoint"

Questa frase è intenzionalmente scadente: il laboratorio consiste nel trasformarla in un finding professionale e motivare la severity invece di ereditarla dalle note.
