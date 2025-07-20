# Use of Hashing to Secure Passwords in the Database

- Hashing is a cryptographic process used to secure passwords in databases. Unlike encryption, hashing is a one-way function, meaning it cannot be reversed to retrieve the original password. This ensures that even if the database is compromised, the original passwords remain secure

# JWT (JSON Web Token)
- JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

- Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user
details. Instead, they are issued by the server during the authentication process and then stored on the
client-side (e.g.,
in cookies or local storage) for later use.


- JWTs are often used for authentication and authorization in web applications.
- "Authentication: " Verifying the identity of a user or client.
- "Authorization: " Determining what actions a user or client is allowed to perform.


## components of a JWT
1. Header
2. payload
3. Signature



# 🛡️ Authentication, Authorization & Full-Stack Setup Guide

## 🔐 Hashing: Securing Passwords in the Database

- **Hashing** is a one-way cryptographic function used to secure passwords.
- Unlike encryption, hashing cannot be reversed—helpful even if the database is compromised.
- Common libraries for hashing: `bcrypt`, `argon2`.

---

## 🔑 JWT (JSON Web Token)

- JWT is a compact, self-contained way to **securely transmit user data** as a JSON object.
- **Use Cases**:
  - *Authentication*: Verify a user’s identity.
  - *Authorization*: Define what resources a user can access.

### ✅ Key Components of JWT:
1. **Header** – Defines token type and algorithm.
2. **Payload** – Contains the claims (e.g., user ID, role).
3. **Signature** – Verifies the message wasn't tampered with.

### 🧠 Token Storage Tips
- Tokens are **not stored** in the database.
- Stored client-side in **cookies** or **localStorage** after login.

---

## 🚀 Node.js + Express Setup

### 📁 Create a New Server
```bash
mkdir server
cd server
npm init -y

