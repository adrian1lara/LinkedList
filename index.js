class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let currentNode = this.head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.nextNode;
            count++;
        }
        return currentNode;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if(this.size === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return removedNode.value;
        }
        let currentNode = this.head;
        while(currentNode.nextNode !== this.tail) {
            currentNode = currentNode.nextNode;
        }
        const removedNode = this.tail;
        currentNode.nextNode = null;
        this.tail = currentNode;
        this.size--;
        return removedNode.value;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return null;
    }

    toString() {
        let result = '';
        let currentNode = this.head;
        while (currentNode) {
            result += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        result += 'null';
        return result;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(0);
console.log(linkedList.toString()); // console.log (1) -> (2) -> (3) -> (4) -> (0) -> null
console.log(linkedList.size); // 5
console.log(linkedList.head.value); // 1
console.log(linkedList.tail.value); // 0
console.log(linkedList.at(2).value); // 3
//console.log(linkedList.pop()); // 3
console.log(linkedList.contains(3)) // true
console.log(linkedList.find(3)) // 2