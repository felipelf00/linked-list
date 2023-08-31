// import LinkedList from "./LinkedList.js";
import { Node } from "./Node.js";
import { LinkedList } from "./LinkedList.js";

const myList = LinkedList();

// const node1 = Node("first node");
// const node2 = Node("second");
// const node3 = Node("third");
// const node4 = Node("new first");

// console.log("Node 1: " + node1);
// console.log("Node 1 value: " + node1.value);

myList.append("second");
myList.append("third");
myList.append("fourth");
myList.prepend("first");

// myList.pop();

// console.log("head: " + myList.head().value.value);
// console.log("tail: " + myList.tail().value.value);
// console.log("at 2: " + myList.at(2).value.value);
console.log("find second: " + myList.find("second"));

myList.insertAt("inserted", 0);
myList.removeAt(0);

myList.toString();
