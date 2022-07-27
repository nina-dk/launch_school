//1st way
class CircularQueue {
  constructor(bufferSize) {
    this.buffer = Array(bufferSize).fill(null);
    this.newestObject = null;
    this.oldestObject = null;
  }

  enqueue(obj) {
    if (this.oldestObject === null) this.oldestObject = obj;

    if (this.buffer.every(obj => obj !== null)) {
      this.dequeue();
      let emptyIdx = this.buffer.findIndex(el => el === null);
      this.buffer[emptyIdx] = obj;
    } else {
      let newestObjIdx = this.buffer.indexOf(this.newestObject);
      if (newestObjIdx === this.buffer.length - 1) this.buffer[0] = obj;
      else this.buffer[newestObjIdx + 1] = obj;
    }

    this.newestObject = obj;
  }

  dequeue() {
    if (this.buffer.every(obj => obj === null)) return null;

    let oldestObjIdx = this.buffer.indexOf(this.oldestObject);
    let removedObj = this.buffer[oldestObjIdx];
    this.buffer[oldestObjIdx] = null;

    if (oldestObjIdx === this.buffer.length - 1) {
      this.oldestObject = this.buffer[0];
    } else {
      this.oldestObject = this.buffer[oldestObjIdx + 1];
    }

    return removedObj;
  }
}

//2nd way
class CircularQueue {
  constructor(bufferSize) {
    this.buffer = Array(bufferSize).fill(null);
    this.nextIdx = 0;
    this.oldestIdx = 0;
  }

  getNextIdx(idx) {
    return (idx + 1) % this.buffer.length;
  }

  enqueue(obj) {
    if (this.buffer[this.nextIdx] !== null) {
      this.buffer[this.oldestIdx] = obj;
      this.nextIdx = this.oldestIdx;
      this.oldestIdx = this.getNextIdx(this.oldestIdx);
    } else {
      this.buffer[this.nextIdx] = obj;
    }

    this.nextIdx = this.getNextIdx(this.nextIdx);
  }

  dequeue() {
    let removedObj = this.buffer[this.oldestIdx];
    this.buffer[this.oldestIdx] = null;

    if (removedObj !== null) {
      this.oldestIdx = this.getNextIdx(this.oldestIdx);
    }

    return removedObj;
  }
}

//3rd way
class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.buffer = [];
  }

  enqueue(obj) {
    if (this.buffer.length === this.bufferSize) {
      this.dequeue();
    }

    this.buffer.push(obj);
  }

  dequeue() {
    return this.buffer.shift() || null;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);