// export const Node = (value) => {
//   value = value || null;
//   let nextNode = null;
//   return { value, nextNode };
// };

export const Node = (value = null) => {
  return {
    value: value,
    nextNode: null,
  };
};
