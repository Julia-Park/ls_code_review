function isBetween(number, min, max) {
  return number >= min && number <= max;
}

function createCipher(rotationValue) {
  const UPPER = { A: 'A'.charCodeAt(0), Z: 'Z'.charCodeAt(0) }
  const LOWER = { a: 'a'.charCodeAt(0), z: 'z'.charCodeAt(0) }
  const ALPHABET_LENGTH = 26;

  let rotate = function rotateAlphabeticAscii(asciiNum, upperLimit) {
    let rotatedAsciiNum = asciiNum + rotationValue;
    if (rotatedAsciiNum > upperLimit) {
      rotatedAsciiNum -= ALPHABET_LENGTH;
    }

    return rotatedAsciiNum;
  }

  return function characterRotationCipher(string) {
    let rotatedString = '';

    for (let idx = 0; idx < string.length; idx++) {
      let asciiNum = string.charCodeAt(idx);

      if (isBetween(asciiNum, LOWER['a'], LOWER['z'])) {
        asciiNum = rotate(asciiNum, LOWER['z']);
      } else if (isBetween(asciiNum, UPPER['A'], UPPER['Z'])) {
        asciiNum = rotate(asciiNum, UPPER['Z']);
      }

      rotatedString += String.fromCharCode(asciiNum);
    }

    return rotatedString;
  }
}

let rot13 = createCipher(13);
