const { createHash } = await import("node:crypto");

// Using simple Hash
function generateHash(secret) {
  const hash = createHash("sha256");
  return hash.update(secret).digest("hex");
}

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = generateHash(password);
  }

  authenticate(name, password) {
    if ((generateHash(password) === this.hash) & (name === this.name)) {
      return true;
    }
    return false;
  }
}
const user1 = new User("Lucas", "admin");
console.log(user1);
console.log(user1.authenticate("Lucas", "admin")); // true
console.log(user1.authenticate("lucas", "admin")); // false
console.log(user1.authenticate("Lucas", "Admin")); // false
