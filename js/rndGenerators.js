/**
    Generates random number
    @param arr Array where the random number will be pushed
    @param length Number that will be multiplied to when generating random number
    @param loop Used in the loop condition. How many times it should iterate 
*/
export const rndGenerator = (len) => {
  return Math.floor(Math.random() * len);
};

export const rndArrayGenerator = (arr, length, loop) => {
  for (let i = 0; i < loop; i++) {
    arr.push(rndGenerator(length));
  }
};
