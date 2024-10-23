const message = "abcxyz";

function cryptographyCaesar(message, offset) {
  const result = message.split("").map((char) => {
    const charCode = char.charCodeAt();

    // Adjusting to don't get symbols
    let adjustedCharCode;
    if ((charCode >= 97) & (charCode <= 122)) {
      // "a".charCodeAt() = 97
      // "z".charCodeAt() = 122
      adjustedCharCode =
        charCode + offset > 122 ? charCode + offset - 122 + 97 - 2 : charCode;
    } else if ((charCode >= 65) & (charCode <= 90)) {
      // "A".charCodeAt() = 65
      // "Z".charCodeAt() = 90
      adjustedCharCode =
        charCode + offset > 90 ? charCode + offset - 90 + 65 - 2 : charCode;
    }
    return String.fromCharCode(adjustedCharCode + offset);
  });

  return result.join("");
}

console.log(cryptographyCaesar(message, 1));

console.log("a".charCodeAt());
console.log("z".charCodeAt());
console.log("A".charCodeAt());
console.log("Z".charCodeAt());
