// 언어: nodejs
// 메모리: 12880 KB
// 시간: 232 ms
// 코드길이: 2614 B

const [n, ...commands] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(e) {
    this.item = e;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push_front(item) {
    const node = new Node(item);
    if (this.size() === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.first.prev = node;
      node.next = this.first;
      this.first = node;
    }
    this.length += 1;
  }

  push_back(item) {
    const node = new Node(item);
    if (this.size() === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.length += 1;
  }

  pop_front() {
    if (this.size() === 0) {
      return -1;
    }
    const popItem = this.first;
    if (this.size() === 1) {
      this.first = null;
    } else {
      this.first.prev = null;
    }
    this.length -= 1;
    return popItem.item;
  }
  pop_back() {
    if (this.size() === 0) return -1;
    const popItem = this.last;
    this.last = this.last.prev;
    if (this.size() === 1) {
      this.last = null;
    } else {
      this.last.next = null;
    }
    this.length -= 1;
    return popItem.item;
  }
  size() {
    return this.length;
  }

  empty() {
    if (this.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() === 1) return -1;
    return this.first.item;
  }

  back() {
    if (this.empty() === 1) return -1;
    return this.last.item;
  }
}

let answer = [];
let deque = new Deque();
const command = commands.map((v) => v.split(" "));
command.forEach((v) => {
  switch (v[0]) {
    case "push_front":
      deque.push_front(v[1]);
      break;
    case "push_back":
      deque.push_back(v[1]);
      break;
    case "pop_front":
      answer.push(deque.pop_front());
      break;
    case "pop_back":
      answer.push(deque.pop_back());
      break;
    case "size":
      answer.push(deque.size());
      break;
    case "empty":
      answer.push(deque.empty());
      break;
    case "front":
      answer.push(deque.front());
      break;
    case "back":
      answer.push(deque.back());
      break;
  }
});

console.log(answer.join("\n"));
