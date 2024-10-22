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


