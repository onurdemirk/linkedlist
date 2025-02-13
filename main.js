import { LinkedList } from "/linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

console.log(list.contains("snake"));
console.log(list.contains("ttt"));
console.log(list.find("ttt"));
console.log(list.find("snake"));

list.insertAt("aa", 3);
console.log(list.toString());

list.removeAt(3);
console.log(list.toString());

list.removeAt(0);
console.log(list.toString());
