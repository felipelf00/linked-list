import { Node } from "./Node.js";
// import Node from "./Node.js";

export const LinkedList = () => {
  let first = null;

  const append = (value) => {
    const newNode = Node(value);
    if (first === null) {
      first = newNode;
      return;
    }
    tail().nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    newNode.nextNode = first;
    first = newNode;
  };

  const head = () => {
    return first;
  };

  const tail = () => {
    if (first === null) return null;
    let pointer = first;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const size = () => {
    if (first === null) return 0;
    let pointer = first;
    let counter = 0;
    while (pointer) {
      counter += 1;
      pointer = pointer.nextNode;
    }
    return counter;
  };

  const at = (index) => {
    let pointer = first;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    if (first === null) return;

    at(size() - 2).nextNode = null;
  };

  const contains = (value) => {
    let pointer = first;
    while (pointer) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let pointer = first;
    let index = 0;
    while (pointer) {
      if (pointer.value === value) return index;
      index += 1;
      pointer = pointer.nextNode;
    }
    return null;
  };
  const toString = () => {
    let pointer = first;
    let text = "";
    while (pointer) {
      if (pointer === first) {
        text += `( ${pointer.value} )`;
      } else {
        text += ` -> ( ${pointer.value} )`;
      }
      pointer = pointer.nextNode;
    }
    text += ` -> null`;
    console.log(text);
  };

  const insertAt = (value, index) => {
    const newNode = Node(value);
    if (index === 0) {
      newNode.nextNode = first;
      first = newNode;
    } else {
      newNode.nextNode = at(index);
      at(index - 1).nextNode = newNode;
    }
  };

  const removeAt = (index) => {
    if (index === 0) {
      first = first.nextNode;
    } else {
      at(index - 1).nextNode = at(index + 1);
    }
  };

  return {
    append,
    prepend,
    head,
    tail,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

// export default LinkedList;
// export { LinkedList };
