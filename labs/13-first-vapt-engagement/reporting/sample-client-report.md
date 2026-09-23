# UmbraMarket S.r.l.
# Vulnerability Assessment & Penetration Test Report

> **TRAINING SAMPLE — all organizations, users, data and evidence are fictional.**

## Document Control

| Field | Value |
|---|---|
| Customer | UmbraMarket S.r.l. |
| Engagement | Pre-release VAPT |
| Assessment type | Grey-box, limited-scope |
| Assessment window | Tuesday 09:00–13:00 |
| Report version | 1.0 Training Sample |
| Classification | Training / Confidential |
| Test environment | Local laboratory only |

---

# 1. Executive Summary

UmbraMarket requested a limited pre-release security assessment of the local training environment, with particular attention to whether ordinary authenticated customers could access data or functions outside their authorization boundary.

The assessment combined customer discovery, attack-surface analysis, technical reconnaissance, automated vulnerability-assessment results and manual validation.

The principal confirmed issue was an authorization weakness in the order API. A customer authenticated as Alice was able to request a training order established as belonging to Bob and receive the order details. The test was stopped after the first successful cross-user response; bulk enumeration was not performed.

A second authorization issue was confirmed on an administrative statistics endpoint, which accepted a request from a customer role.

The automated scanner also reported a possible remote-code-execution condition based on a web-server fingerprint. No exploitability evidence or applicable prerequisites were demonstrated, so this alert was not reported as a confirmed vulnerability.

The highest priority is to enforce server-side authorization for both object ownership and privileged functions, followed by a targeted retest.

---

# 2. Objectives

The assessment sought to answer:

1. Can an ordinary authenticated customer access data belonging to another customer?
2. Can an ordinary customer reach functionality intended for privileged roles?
3. Do staging or exposed services disclose information that materially improves an attack path?
4. Which automated findings survive manual validation?

---

# 3. Scope

## In scope

| Asset | Purpose |
|---|---|
| 127.0.0.1:5005 | UmbraMarket Guided application and API |
| 127.0.0.1:8080 | Admin staging service |
| 127.0.0.1:9090 | File service |

## Explicitly out of scope

- 127.0.0.1:3000;
- any other local port;
- LAN infrastructure;
- Internet systems;
- real users;
- real social engineering;
- destructive testing;
- denial of service;
- persistence;
- bulk extraction.

## Test identities

Two fictional customer identities, Alice and Bob, were supplied for authorization testing.

Passwords and active session values are intentionally omitted from the final report.

---

# 4. Rules of Engagement

Testing was limited to the provided local environment.

The assessment allowed reconnaissance, service enumeration, authenticated web/API testing and minimal reversible validation.

The following stop condition applied:

> When a single controlled request/response pair clearly demonstrates unauthorized access, stop that line of testing and document the evidence.

No brute force, denial of service, persistence, destructive actions or mass enumeration were permitted.

---

# 5. Methodology

The engagement followed this process:

```text
customer discovery
→ scope validation
→ organizational attack-surface mapping
→ technical reconnaissance
→ web/API mapping
→ automated VA review
→ manual validation
→ controlled proof
→ impact analysis
→ reporting
```

Automated findings were treated as hypotheses rather than confirmed vulnerabilities.

For authorization testing, normal application behavior was established first using two separate customer identities. A single cross-user request was then used to validate the candidate BOLA condition.

Evidence was stored with unique IDs and linked to the relevant finding.

---

# 6. Limitations

The conclusions in this report must be interpreted within the following limits:

- assessment duration was limited;
- only the defined local services were tested;
- social engineering was discussed but not executed;
- physical security was not tested;
- no malicious removable media was deployed;
- denial of service was excluded;
- no bulk order enumeration was performed;
- no attempt was made to modify orders;
- SQL injection and XSS present in the training application were not required for this engagement and were not used to expand impact;
- the environment contains only fictional training data;
- the scale of unauthorized access in a hypothetical production environment was not measured.

These limitations prevent conclusions beyond the demonstrated evidence.

---

# 7. Attack Surface Summary

The discovery phase identified technical, human, process, physical, identity, third-party and timing-related surfaces.

Several non-technical hypotheses were deliberately not tested because they were outside scope, too invasive or not justified by available evidence.

Examples include physical-access hypotheses and removable-media scenarios.

Technical testing was prioritized because it directly addressed the customer's stated authorization questions and could be validated safely inside the authorized local environment.

---

# 8. Findings Summary

| ID | Finding | Asset | Severity | Status |
|---|---|---|---|---|
| F-01 | Customer can access another customer's order | /api/orders/{id} | High | CONFIRMED |
| F-02 | Customer role can access administrative statistics | /api/admin/stats | Medium | CONFIRMED |
| O-01 | Staging service exposes implementation information | Admin staging | Low / Observation | OBSERVED |

## Not reported as confirmed

The automated scanner reported a possible remote-code-execution condition from a server-version fingerprint. No applicable exploitation prerequisites or successful proof were established. The alert is therefore recorded as **not demonstrated**, not as a vulnerability.

---

# 9. F-01 — Customer can access another customer's order

## Severity

**High**

The issue provides a low-privileged authenticated customer with direct access to another customer's order data. The test requires no privileged role and only a change to the requested object identifier.

The severity reflects the demonstrated confidentiality boundary failure. The report does not claim bulk compromise because that was not tested.

## Affected asset

`http://127.0.0.1:5005/api/orders/{id}`

## Category

Broken Object Level Authorization / object-level access control.

## Status

**CONFIRMED**

## Summary

The order-detail endpoint verifies that the requester has an authenticated session but does not verify that the requested order belongs to that customer.

As a result, Alice was able to request an order established as belonging to Bob and receive its details.

## Expected security rule

An ordinary customer must only be able to retrieve orders belonging to that customer's identity.

## Preconditions

- valid customer account;
- authenticated customer session;
- knowledge of another valid order identifier.

## Validation method

The assessment first established the expected baseline for both users, then performed one cross-user request.

### Step 1 — Alice baseline

Authenticate as Alice and request Alice's known training order:

```http
GET /api/orders/1001
```

Result: HTTP 200 for Alice's own object.

Evidence: **E-01**.

### Step 2 — Establish Bob ownership

Authenticate as Bob and request Bob's known training order:

```http
GET /api/orders/1002
```

Result: HTTP 200 for Bob's object.

Evidence: **E-02**.

### Step 3 — Cross-user validation

Return to Alice's authenticated context and request:

```http
GET /api/orders/1002
```

## Expected result

The application should reject the request or behave as though the object is unavailable to Alice, for example with HTTP 403 or 404.

## Observed result

The API returned HTTP 200 and the training order associated with Bob, including item, value and shipping-address fields.

Evidence: **E-03**.

## Evidence correlation

```text
E-01
Alice session → Alice order 1001

E-02
Bob session → Bob order 1002

E-03
Alice session → Bob order 1002 → HTTP 200
```

The ownership relationship is established before the cross-user test, preventing the conclusion from relying only on a numeric identifier.

## Demonstrated impact

An authenticated customer can read order data belonging to another customer.

In a production context where equivalent records contain customer and delivery information, this would represent unauthorized disclosure of customer order data.

## Not demonstrated

The assessment did **not** demonstrate:

- access to all orders;
- automated enumeration;
- order modification;
- deletion;
- database compromise;
- account takeover;
- server compromise.

## Root cause

The endpoint checks authentication but queries the order only by the supplied order identifier. It does not enforce an ownership condition using the authenticated user's identity.

## Remediation

### Immediate

Apply server-side object authorization to every order-detail request.

Conceptually:

```text
requested order
+
authenticated customer identity
→ ownership decision
→ allow / deny
```

The authorization decision must not rely on the client hiding object identifiers.

Using non-sequential or UUID identifiers may reduce guessability but does not replace authorization.

### Structural

Centralize authorization rules for API resources and add automated negative tests covering cross-user access.

## Retest procedure

1. authenticate as Alice;
2. confirm Alice can still retrieve Alice's own order;
3. request Bob's training order;
4. verify that no Bob order data is returned.

### PASS

Cross-user request receives an appropriate denial such as 403 or 404 and contains no protected order data.

### FAIL

Alice continues to receive any protected content from Bob's order.

---

# 10. F-02 — Customer role can access administrative statistics

## Severity

**Medium**

## Affected asset

`/api/admin/stats`

## Category

Broken Function Level Authorization / role authorization.

## Status

**CONFIRMED**

## Summary

An authenticated customer can invoke an API function intended for administrative use.

## Preconditions

Valid ordinary customer session.

## Validation

Using Alice's customer session, the assessment requested:

```http
GET /api/admin/stats
```

## Expected result

The application should enforce an administrative role and deny a customer.

## Observed result

HTTP 200 returned aggregate user, order and revenue statistics.

Evidence: **E-04**.

## Demonstrated impact

A customer can access information exposed through an administrative function.

No administrative modification capability was tested or demonstrated.

## Root cause

The endpoint checks whether a session exists but does not enforce the required role.

## Remediation

Apply explicit server-side role/permission authorization to privileged endpoints and test both positive and negative role cases.

## Retest

- customer role → deny;
- authorized administrative role → allow.

---

# 11. O-01 — Staging service exposes implementation information

## Status

**OBSERVATION**

The staging service exposes metadata and files that reveal implementation context and API locations.

This information can assist attack-surface discovery but was not treated as equivalent to compromise.

Recommended actions:

- remove obsolete backup/draft content before production;
- minimize unnecessary implementation metadata;
- ensure staging services are restricted appropriately.

---

# 12. Automated Finding Review

## Scanner alert: possible web-server RCE

**Final status: NOT DEMONSTRATED**

The scanner based its conclusion on product/version fingerprinting.

Manual review did not establish:

- a matching vulnerable build;
- required vulnerable functionality;
- applicable configuration;
- a working exploit primitive;
- impact.

Therefore the report does not label the target as remotely exploitable.

This distinction is central to the engagement:

```text
scanner alert
≠
validated vulnerability
```

---

# 13. Remediation Roadmap

| Priority | Action | Related finding |
|---|---|---|
| P1 | Enforce object ownership on order API | F-01 |
| P1 | Add negative authorization tests for cross-user access | F-01 |
| P2 | Enforce role checks on administrative endpoints | F-02 |
| P2 | Add authorization tests for privileged functions | F-02 |
| P3 | Remove unnecessary staging metadata/files | O-01 |
| P3 | Review other APIs for consistent centralized authorization | F-01 / F-02 |

---

# 14. Retest Plan

The retest should focus first on authorization boundaries.

## F-01

```text
Alice own order → allowed
Alice Bob order → denied
Bob own order   → allowed
```

## F-02

```text
customer → /api/admin/stats → denied
admin    → /api/admin/stats → allowed
```

A retest should record new evidence IDs rather than overwrite the original evidence.

---

# 15. Evidence Register

| ID | Evidence | Supports |
|---|---|---|
| E-01 | Alice own-order baseline | F-01 |
| E-02 | Bob own-order ownership baseline | F-01 |
| E-03 | Alice cross-user order response | F-01 |
| E-04 | Customer response from admin statistics API | F-02 |

Evidence files are stored in:

`reporting/evidence/`

Session values are redacted.

---

# 16. Conclusion

The engagement confirmed two authorization weaknesses in the local training application.

The most significant demonstrated issue allows one authenticated customer to access another customer's order. The second allows a customer role to invoke an administrative statistics function.

The assessment deliberately stopped after the minimum evidence required to prove each authorization failure and did not attempt to expand the impact through bulk enumeration or destructive actions.

The recommended next step is to correct server-side object and function authorization, introduce automated negative authorization tests and perform a focused retest.
