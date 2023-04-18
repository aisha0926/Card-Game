/**
 * Function that loops through the randomly generated array, nested inside is the loop that loops through the object passed, after checking if the randomly generated array matches the object number, only then will it push the object in the specified array.
 * @param outerArr Randomly generated array
 * @param object Object that will be iterated through
 * @param arr Array that will contain matched elements (e.g. generated number === object number propert)
 */
export default (outerArr, object, arr) => {
  for (let index of outerArr) {
    if (index > 10 && index <= 15) {
      for (let card of object.buff) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    } else {
      for (let card of object.attack) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    }

    // if (index <= 10) {
    //   for (let card of object.attack) {
    //     if (card.number === index) {
    //       arr.push(card);
    //     }
    //   }
    // } else if (index < 16) {
    //   for (let card of object.buff) {
    //     if (card.number === index) {
    //       arr.push(card);
    //     }
    //   }
    // }
  }
};
