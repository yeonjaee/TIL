class PriorityQueue {
    constructor(compare) {
        this.queue = [];
        this.compare = compare;
    }

    enqueue(value) {
        let i = 0;
        while (i < this.queue.length && this.compare(value, this.queue[i]) > 0) {
            i++;
        }
        this.queue.splice(i, 0, value);
    }

    dequeue() {
        if (this.queue.length > 0) {
            return this.queue.shift();
        } else {
            return null;
        }
    }

    peek() {
        if (this.queue.length > 0) {
            return this.queue[0];
        } else {
            return null;
        }
    }
}

function dualPriorityQueue(ops) {
    const maxQueue = new PriorityQueue((a, b) => b - a);
    const minQueue = new PriorityQueue((a, b) => a - b);

    ops.forEach(op => {
        const [opType, opValue] = op.split(" ");
        if (opType === "I") {
            const value = parseInt(opValue);
            maxQueue.enqueue(value);
            minQueue.enqueue(value);
        } else if (opType === "D") {
            if (opValue === "1") {
                const max = maxQueue.dequeue();
                if (max !== null) {
                    minQueue.queue.splice(minQueue.queue.indexOf(max), 1);
                }
            } else if (opValue === "-1") {
                const min = minQueue.dequeue();
                if (min !== null) {
                    maxQueue.queue.splice(maxQueue.queue.indexOf(min), 1);
                }
            }
        }
    });

    let max = null;
    let min = null;
    if (maxQueue.length > 0) max = maxQueue.peek();
    if (minQueue.length > 0) min = minQueue.peek();
    if (max === null && min === null) {
        console.log("EMPTY");
    } else {
        console.log(`${max} ${min}`);
    }
}

const fs = require('fs');
const input = fs.readFileSync(0);
const lines = input.trim().split("\n");
const T = parseInt(lines.shift());
for (let i = 0; i < T; i++) {
    const k = parseInt(lines.shift());
    const ops = lines.slice(0, k);
    lines.splice(0, k);

    dualPriorityQueue(ops);
}