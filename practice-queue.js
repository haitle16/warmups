'use strict';

const LinkedList = require('../practice-LL.js');

class Queue {
    consructor() {
        this.front = null;
        this.storage = new LinkedList();
    }

    enqueue(value) {
        this.storage.prepend(value);
        this.front = this.storage.head.value;
        return this;
    }

    dequeue() {
        let dequeued = this.storage.deleteFromEnd();
        return dequeued;
    }
    peek() {
        let peek_first = this.storage.getFirstValue();
        return peek_first;
    }
}

module.exports = Queue;