const { scryptSync, randomBytes, timingSafeEqual } = await import(
  "node:crypto"
);

// Using Hash with Salt -> More robust
function generateHash(password) {
  const salt = randomBytes(16).toString("hex");
  const bufferHash = scryptSync(password, salt, 64);
  return [bufferHash, salt];
}

class User {
  constructor(name, password) {
    (this.name = name), ([this.bufferHash, this.salt] = generateHash(password));
  }

  authenticate(name, password) {
    if (name === this.name) {
      const bufferHashTest = scryptSync(password, this.salt, 64);
      console.log(Buffer.from(this.bufferHash, "hex"));
      // To compare two buffers, I need timingSafeEqual() method

      // bufferHashTest === this.bufferHash // false
      // timingSafeEqual(bufferHashTest, Buffer.from(this.bufferHash, "hex") // true
      if (timingSafeEqual(bufferHashTest, this.bufferHash)) {
        return true;
      }
    }
    return false;
  }
}

const user1 = new User("Lucas", "admin");
// console.log(user1);
console.log(user1.authenticate("Lucas", "admin"));
