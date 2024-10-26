import { generateKeyPairSync, privateDecrypt, publicEncrypt } from "crypto";

// const algorithm = "aes256";
const message = "MyMessageToEncrypt";

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const bufferMessageEncrypted = publicEncrypt(publicKey, Buffer.from(message));
console.log("Encrypted:", bufferMessageEncrypted.toString("hex"));

const messageDecrypted = privateDecrypt(privateKey, bufferMessageEncrypted);
console.log("Decrypted:", messageDecrypted.toString("utf8"));
