import { generateKeyPairSync, createSign, createVerify } from "crypto";

// const data = {
//   user: "Lucas",
//   message: "My signatured message",
// };
let data = "My signatured message";

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

const sign = createSign("SHA256");
sign.update(data);
sign.end();
const signature = sign.sign(privateKey);

// --------------- TRANSMISSION (data, sign, public key) ---------------

const verify = createVerify("SHA256");
verify.update(data);
verify.end();

const isVerified = verify.verify(publicKey, signature);
console.log(isVerified); // true

data += "Changing a little bit";

const verify2 = createVerify("SHA256"); // I can not use same createVerify instance after evoking .end() method
verify2.update(data);
verify2.end();

const isVerified2 = verify2.verify(publicKey, signature);
console.log(isVerified2); // false
