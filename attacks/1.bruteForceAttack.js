const { createHash } = await import("node:crypto");

// Using simple Hash

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

const user = new User("lucas", "9128");

for (let password = 0; password < 10000; password++) {
  if (user.authenticate("lucas", password.toString())) {
    console.log(`Password finded: ${password}`);
    break;
  }
}
