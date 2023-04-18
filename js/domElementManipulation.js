export const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    // if (parent.hasChildNodes()) {
    parent.removeChild(element);
    // }
  }, time);
};
export const addElementFn = (parent, element, time) => {
  setTimeout(() => {
    parent?.appendChild(element);
  }, time);
};
