// const queue = [];

// Enqueue (add) items to the queue
// queue.push('item1');
// queue.push('item2');
// queue.push('item3');

// Dequeue (remove and retrieve) items from the queue
// const dequeuedItem = queue.shift(); // Removes and retrieves 'item1'

// console.log(dequeuedItem); // Output: 'item1'
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
//   const node1 = new Node(42); 

  
//   class Queue {
//     constructor() {
//       this.front = null;
//       this.rear = null;
//     }
  
//     enqueue(data) {
//       const newNode = new Node(data);
//       if (!this.front) {
//         this.front = newNode;
//         this.rear = newNode;
//       } else {
//         this.rear.next = newNode;
//         this.rear = newNode;
//       }
//     }
  
//     dequeue() {
//       if (!this.front) {
//         return null; // Queue is empty
//       }
//       const data = this.front.data;
//       this.front = this.front.next;
//       return data;
//     }
//   }
  
//   const queue = new Queue();
  
//   queue.enqueue('item1');
//   queue.enqueue('item2');
//   queue.enqueue('item3');
  
//   const dequeuedItem = queue.dequeue(); // Removes and retrieves 'item1'
  
//   console.log(dequeuedItem); // Output: 'item1'
  function Queue(params) {
    collection=[]
    this.print=function (params) {
        console.log(collection)
    }
    this.enqueue=function (element) {
        collection.push(element)
    }
    this.dequeue=function () {
       return collection.shift()
    }
    this.front=function () {
        return collection[0]
    }
    this.size=function () {
      return collection.length
    }
    this.isEmpty=function () {
     return (collection.length===0)
    }
  }
  var q=new Queue()
  q.enqueue('a')
  q.enqueue('b')
  q.enqueue('c')
  q.print()
  q.dequeue()//prints the item at the beginning of the array
  console.log(q.front())
  q.print()