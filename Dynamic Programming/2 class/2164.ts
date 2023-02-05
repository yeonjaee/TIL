// 언어: nodejs
// 메모리: 89076 KB
// 시간: 412 ms
// 코드길이: 1098 B

// 삽입삭제가 빈번한 경우 LinkedList를 사용

// @ts-ignore
let N = parseInt(require("fs").readFileSync(0).toString().trim());

// @ts-ignore
class Node {
  public val: any;
  public next: any;
  public prev: any;
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  public head: any;
  public tail: any;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      // @ts-ignore
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
    return newNode;
  }

  getHead() {
    return this.head.val;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length++;
  }

  getSize() {
    return this.length;
  }
}

const node = new LinkedList();

for (let i = 1; i < N; i++) {
  node.push(i);
}
while (node.getSize()! == 1) {
  node.removeHead();
  node.push(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
