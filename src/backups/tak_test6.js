let objX_Arr = [4, 4]
let objY_Arr = [0, 3, 4]
let objZ_Arr = [0, 0]

function objectCompare(arr1, arr2, arr3) {
    for (let item of objY_Arr) {
        console.log(objX_Arr.some((i) => i === item))
        if (objX_Arr.some((i) => i === item)) {
            console.log('success1', item)
            for (let item2 of objZ_Arr) {
                if (objY_Arr.some((i) => i === item2)) {
                    console.log('success2', item2)
                    return true
                }
            }

        }
    }
    return false
}
objectCompare(objX_Arr, objY_Arr, objZ_Arr)
console.log(objectCompare(objX_Arr, objY_Arr, objZ_Arr))

import {LinkedList} from './linked-list.js'

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }
    push(value) {
        this.list.prepend(value)
    }
    pop() {
        return this.list.removeFromFront()
    }
    peek() {
        return this.list.head.value
    }
    getSize() {
        return this.list.getSize()
    }
    print() {
        return this.list.print()
    }
}
// const stack = new LinkedListStack()
// console.log(stack.getSize())
// stack.push((20))
// stack.push((30))
// stack.push((42))
// stack.push((21))
// console.log(stack.getSize())
// stack.print()
// console.log(stack.pop())
// stack.print()
// console.log(stack.peek())

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList()
  }

  addToQueue(value) {
    return this.list.append(value)
  }
  removeFromQueue() {
    return this.list.removeFromFront()
  }
  print() {
    this.list.print()
  }
 }
const queue = new LinkedListQueue()
queue.addToQueue((20))
queue.addToQueue((30))
queue.addToQueue((42))
queue.addToQueue((21))
queue.print()
console.log(queue.removeFromQueue())
console.log(queue.removeFromQueue())
queue.print()