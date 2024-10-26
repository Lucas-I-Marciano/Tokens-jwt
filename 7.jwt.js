import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";

const key = randomBytes(32);

const token = jwt.sign(
  {
    user: "Lucas",
    age: 25,
    stack: "JavaScipt",
  },
  key
);

let [toI, iterator] = [["HEADER", "PAYLOAD", "VERIFY SIGNATURE"], 0];
token.split(".").map((i) => {
  console.log(toI[iterator], ":", i);
  iterator++;
});
console.log("-----------------------");

const decoded = jwt.verify(token, key);
console.log("Decoded:", decoded);
