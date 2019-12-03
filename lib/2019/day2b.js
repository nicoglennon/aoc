module.exports = function(data) {
  const initialIntcode = data.split(",").map(x => +x);
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      let testingIntcode = Array.from(initialIntcode);
      testingIntcode[1] = i;
      testingIntcode[2] = j;
      let result = processIntcode(testingIntcode, 0);
      if (result === 19690720) {
        return 100 * i + j;
      }
    }
  }
  throw Error("No matching result found");
};

const processIntcode = (initialIntcode, startPosition) => {
  const opcode = initialIntcode[startPosition];
  let newIntcode = Array.from(initialIntcode);
  const replaceIndex = initialIntcode[startPosition + 3];
  switch (opcode) {
    case 1:
      const sum =
        initialIntcode[initialIntcode[startPosition + 1]] +
        initialIntcode[initialIntcode[startPosition + 2]];
      newIntcode[replaceIndex] = sum;
      break;
    case 2:
      const product =
        initialIntcode[initialIntcode[startPosition + 1]] *
        initialIntcode[initialIntcode[startPosition + 2]];
      newIntcode[replaceIndex] = product;
      break;
    case 99:
      return initialIntcode[0];
    default:
      throw Error("Bad opcode");
  }
  return processIntcode(newIntcode, startPosition + 4);
};
