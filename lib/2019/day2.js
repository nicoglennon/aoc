module.exports = function(data) {
  const initialIntcode = data.split(",").map(x => +x);
  return processIntcode(initialIntcode, 0);
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
