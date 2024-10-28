const { createHash } = await import("node:crypto");

const commonPasswords = [
  "senha",
  "123456",
  "senha123",
  "admin",
  "blink182",
  "meuAniversario",
  "senha123456",
  "brasil",
  "102030",
];

const leakedHash = [
  "21232f297a57a5a743894a0e4a801fc3",
  "cedf5ab7b5c5852b3ed35d7dbe3c3835",
  "81dc9bdb52d04dc20036dbd8313ed055",
];

function createMyHash(password, strategy) {
  return createHash(strategy).update(password).digest("hex");
}

const passHash = commonPasswords.map((password) => {
  return { password, hash: createMyHash(password, "MD5") };
});

leakedHash.map((hash) => {
  return passHash.map((dictPassHash) => {
    if (hash === dictPassHash["hash"]) {
      console.log(`Hash: ${hash} refers to Pass: ${dictPassHash["password"]}`);
    }
  });
});
