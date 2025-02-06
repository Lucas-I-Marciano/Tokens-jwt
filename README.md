# Study - Tokens and Data Security Studies

This project focuses on studying various methods for securing data storage and transmission. The repository contains examples ranging from basic encryption techniques to modern token-based authentication.

## Project Objectives
- Understand the limitations of simple encryption methods.
- Explore secure password storage techniques.
- Study encryption (symmetric and asymmetric) and digital signatures.
- Learn about JWT (JSON Web Tokens) for secure web application authentication.

## Topics Covered

### 1. Caesar Cipher
**File:** [1.caesarCipher.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/1.caesarCipher.js)
- Implements the classic Caesar Cipher encryption.
- Demonstrates the weakness of simple substitution ciphers.

### 2. Simple Hashing
**File:** [2.hashSimple.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/2.hashSimple.js)
- Stores passwords using simple hashing.
- Highlights the vulnerability to rainbow table attacks.

### 3. Hashing with Salt
**File:** [3.hashSalt.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/3.hashSalt.js)
- Secures password storage by adding salt to hashes.
- Explains how to store passwords securely in a database.

### 4. Symmetric Encryption
**File:** [4.symmetricCrypt.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/4.symmetricCrypt.js)
- Demonstrates encryption and decryption using a shared key.
- Discusses the security risk of key sharing.

### 5. Asymmetric Encryption
**File:** [5.asymmetricCrypt.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/5.asymmetricCrypt.js)
- Explains public and private key encryption.
- Highlights the advantages of key pair security.

### 6. Digital Signatures
**File:** [6.signature.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/6.signature.js)
- Ensures data integrity and authenticity.
- Verifies that transmitted data has not been altered.

### 7. JWT (JSON Web Tokens)
**File:** [7.jwt.js](https://github.com/Lucas-I-Marciano/Tokens-jwt/blob/main/7.jwt.js)
- Explores the power of JWT for secure web application token management.
- Demonstrates creating, signing, and verifying tokens.

## How to Run the Examples
1. Clone the repository:
   ```bash
   git clone https://github.com/Lucas-I-Marciano/Tokens-jwt
   ```
2. Navigate to the project folder:
   ```bash
   cd Tokens-jwt
   ```
3. Run each example file individually using Node.js:
   ```bash
   node <filename.js>
   ```
   Replace `<filename.js>` with the specific file you want to execute (e.g., `1.caesarCipher.js`).

## Concepts Covered
### Encryption Techniques
- Understanding the evolution from simple ciphers to secure encryption.

### Secure Password Storage
- Implementing hash and salt techniques.

### Digital Security
- Ensuring data integrity with digital signatures.

### Modern Authentication
- Utilizing JWT for secure token-based web applications.

## Author
[Lucas I. Marciano](https://github.com/Lucas-I-Marciano)

## License
This project is for educational purposes only and does not include a specific license.

