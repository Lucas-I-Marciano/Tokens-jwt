import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const algorithm = "aes256";

// key and iv must be suitable for it algorith, like a jigsaw puzzle
// If you try to resolve a jigsaw puzzle with different sizes, it will not fit
// For aes256, must be 32 bytes for key and 16 bytes for i
/*
Algorithm     Length IV (Bytes)	    Length Key (Bytes)
AES-128	      16	                  16
AES-192	      16	                  24
AES-256	      16	                  32
DES	          8	                    8
Triple DES	  8	                    24
*/
const key = randomBytes(32);
const iv = randomBytes(16);
const message = "My Text";

const cipher = createCipheriv(algorithm, key, iv);

let encrypted = cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log("Encrypted:", encrypted);
// --------------- TRANSMISSION (encrypted message, key, iv) ---------------

const decipher = createDecipheriv(algorithm, key, iv);
const messageDecripted =
  decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
console.log("Decrypted:", messageDecripted);

// Problem: If someone get the key through transmission, encryption will fail
// To fix: Create two keys, one public and one private, do not sharing the private
