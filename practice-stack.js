'use strict';

const Node = require('../node.js');
const LinkedList = require('./practice-LL.js');

class Stack {
    constructor() {
        this.top = null;
        this.storage = new LinkedList();
    }

    push(node) {
        this.storage.append(node);
        this.top = this.storage.tail;
    }

    pop() {
        let popped = this.storage.deleteFromEnd();
        this.top = this.storage.tail;
        return popped;
    }

    peek() {
        let peek_last = this.storage.getLastValue();
        return peek_last;
    }
}

module.exports = Stack;