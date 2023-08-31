// export const Node = (value) => {
//   value = value || null;
//   let nextNode = null;
//   return { value, nextNode };
// };

export const Node = (value) => {
  return {
    value: value || null,
    nextNode: null,
  };
};

// const Node = (value) => {
//   return {
//     value: value || null,
//     nextNode: null,
//   };
// };

// export default Node;
