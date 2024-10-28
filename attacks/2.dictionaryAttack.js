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

class User {
  generateHash(secret) {
    const hash = createHash("sha256");
    return hash.update(secret).digest("hex");
  }

  constructor(name, password) {
    this.name = name;
    this.hash = this.generateHash(password);
  }

  authenticate(name, password) {
    if ((this.generateHash(password) === this.hash) & (name === this.name)) {
      return true;
    }
    return false;
  }
}

const user = new User("lucas", "blink182");

commonPasswords.map((password) => {
  if (user.authenticate("lucas", password)) {
    console.log(`Password finded: ${password}`);
  }
});
