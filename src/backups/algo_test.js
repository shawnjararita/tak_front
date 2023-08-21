// FIBONACCI SEQUENCE Big-O = liner O(n)
function fibo(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}
// console.log(fibo(6))

// recursive FIBONACCI Big-O = O(2ⁿ)
// skj: i think it is important that F0=0 and F1=1 . . . apply the base case to the function and then work backwards 
function recurFib(n) {
    if (n < 2) { return n }
    return recurFib(n - 1) + recurFib(n - 2)
}
function recurFib2(n) {
    if (n > 1) { return recurFib(n - 1) + recurFib(n - 2) }
    else { return n }
}
// console.log(recurFib(6))

// ... w/ memoization...makes it MUCH faster because the recursion function with lower numbers are all memoized
function recurFib3(n, prevValues = []) {
    if (prevValues[n] != null) { return prevValues[n] }
    let result
    if (n < 2) { result = n }
    else {
        result = recurFib(n - 1, prevValues) + recurFib(n - 2, prevValues)
    }
    prevValues[n] = result
    return result
}
// console.log(recurFib3(30))

//---------------------------------------------------------------------

// FACTORIAL [ n! ] Big-O = liner O(n)
// ex: 4! = 4*3*2*1
function facto(n) {
    let total = 1
    for (let i = 2; i <= n; i++) {
        total = total * i
    }
    return total
}
// console.log(facto(5))

// recursive FACTORIAL Big-O = Linear O(n)
function recurFacto(n) {
    if (n === 0) { return 1 }
    return n * recurFacto(n - 1)
}

function recurFacto2(n) {
    if (n > 1) { return n * recurFacto(n - 1) }
    else { return 1 }
}
// console.log(recurFacto(5))

// recurFacto(4)
// 4 * recurFacto(3)
//   3 * recurFacto(2)
//     2 * recurFacto(1)
//       1 * recurFacto(0)
//          = 1


//---------------------------------------------------------------------

// PRIME Big-O = O(sqrt(n)) 
// the sqaure root of n because of the optimization
// ..due to the rule that when n=a*b, either a or b must be less than or equal to the square root of n
function primo(n) {
    if (n < 2) { return false }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) { return false }
    }
    return true
}
// console.log(primo(29))


//---------------------------------------------------------------------


// POWER OF TWO  Big-O = Logarithmic O(log n) becasue of the n/2	
function isPowerofTwo(n) {
    if (n < 1) { return false }
    while (n > 1) {
        if (n % 2 !== 0) { return false }
        n = n / 2
    }
    return true
}
// console.log(isPowerofTwo(16))

// POWER OF TWO optimized Big-O = Constant O(1)
// in binary, a number that is a power of 2 (other than 1), ends in 0
// the bitwise & operator is 1 if both numbers = 1, otherwise it = 0
function isPowerofTwoBitwise(n) {
    if (n < 1) { return false }
    return (n & (n - 1)) === 0
}
console.log(isPowerofTwoBitwise(16))


//---------------------------------------------------------------------


// LINEAR SEARCH Big-O = O(n)
let arrX = [-5, 2, 4, 6, 10]

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) { return i }
    }
    return -1
}
// console.log(linearSearch(arrX,4))
// console.log(linearSearch(arrX,42))


//---------------------------------------------------------------------


// BINARY SEARCH Big-O = O(log n)
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) { return middleIndex }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}
// console.log( binarySearch(arrX, 2))


// recursive BINARY SEARCH Big-O = O(log n)
function recursiveBinary(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) { return -1 }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === arr[middleIndex]) { return middleIndex }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)  // the middleIndex = rightIndex
    }
    else {
        return search(arr, target, middleIndex + 1, rightIndex) // the middleIndex = leftIndex
    }
}
// console.log(recursiveBinary(arrX, 6))
// console.log(recursiveBinary(arrX, 10))


//---------------------------------------------------------------------


// BUBBLE SORT Big-O = O(n²)
const arrY = [-6, 20, 8, -2, 4]

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                swapped = true
            }
        }
    } while (swapped)
}
// bubbleSort(arrY)
// console.log('bubbleSort: ', arrY)


//---------------------------------------------------------------------


// INSERTION SORT Big-O = O(n²)
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1                                          // j=sorted element

        while (j >= 0 && (arr[j] > numberToInsert)) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = numberToInsert
    }

}
insertionSort(arrY)
console.log('insertionSort: ', arrY)


//---------------------------------------------------------------------


// QUICK SORT recursive Big-O = O(n²) if the array is already sorted
// **avg. complexity = O(log n)
function quickSort(arr) {
    if (arr.length < 2) { return arr }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) { left.push(arr[i]) }
        else { right.push(arr[i]) }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(arrY))


//---------------------------------------------------------------------


// MERGE SORT recursive Big-O = O(n log n)
// 1. divide array until you have a bunch of subarrays with one element
// 2. merge subarrays into new subarrays ensuring the elements are sorted
function mergeSort(arr) {
    if (arr.length < 2) { return arr }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else { sortedArr.push(rightArr.shift()) }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
// console.log('mergeSort: ', mergeSort(arrY))


// version 2
function mergeSort2(arr) {
    if (arr.length <= 1) { return arr }
    const mid = Math.floor(arr.length / 2)
    let leftArr = mergeSort2(arr.slice(0, mid))
    let rightArr = mergeSort2(arr.slice(mid))
    return merge2(leftArr, rightArr)
}

function merge2(leftArr, rightArr) {
    const sortedArr = []
    let i = 0
    let j = 0
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) { sortedArr.push(leftArr[i]); i++ }
        else { sortedArr.push(rightArr[j]); j++ }
    }
    while (i < leftArr.length) { sortedArr.push(leftArr[i]); i++ }
    while (j < rightArr.length) { sortedArr.push(rightArr[j]); j++ }
    return sortedArr
}
// console.log('mergeSort: ', mergeSort2(arrY))


//---------------------------------------------------------------------


// CARTESIAN PRODUCT Big-O = O(mn)
function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length - 1; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }
    return result
}
const arrA = [1, 2]
const arrB = [3, 4, 5]
console.log(cartesianProduct(arrA, arrB))



//---------------------------------------------------------------------


// CLIMBING STAIRCASE Big-O = O(n)
function climbingStair(n) {
    const noOfWays = [1, 2]
    for (let i = 2; i < n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
}
console.log(climbingStair(5))


//---------------------------------------------------------------------


// TOWER OF HANOI Big-O = O(2ⁿ)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) { console.log(`Move disk 1 from ${fromRod} to ${toRod}`); return }

    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}
console.log(towerOfHanoi(3, 'A', 'C', 'B'))




//---------------------------------------------------------------------



// PERMUTATION algo w/ backtracking
function permute(nums) {
    let resultList = []
    backtrack(resultList, [], nums)
    return resultList
}

function backtrack(resultList, tempList, nums) {
    // base case:
    if (tempList.length === nums.length) {
        resultList.push([...tempList])
        return
    }
    for (let number of nums) {
        if (!tempList.some(n => n === number)) {
            tempList.push(number)
            backtrack(resultList, tempList, nums)
            tempList.pop()
        }
    }
}
// console.log(permute([1, 2, 3]))

// add number to the temp array
// run backtrack() with 1 in tempList
// remove number from temp array
//      tempList = 1,2
//


// SUBSETS algo w/ backtracking
function subset(nums) {
    let resultList = []
    backtrackSub(resultList, [], nums, 0)
    return resultList
}

function backtrackSub(resultSets, tempSet, nums, start) {
    resultSets.push([...tempSet])
    for (let i = start; i < nums.length; i++) {
        tempSet.push(nums[i])
        backtrackSub(resultSets, tempSet, nums, i + 1)
        tempSet.pop()
    }
}
// console.log(subset([1, 2, 3]))


// skj test
function findPath(arr) {
    let foundLinks = []
    let name = ['a1', 'b1']
    for (let x = 0; x < name.length - 1; x++) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr[i].linked.length - 1; j++) {
                if (arr[i].linked[j] === name[x]) { foundLinks.push(arr[i].name[x]) }
            }
        }
    }
    console.log(foundLinks)
}

//---------------------------------------------------------------------
//---------------------------------------------------------------------
// DATA STRUCTURES
// ---------------
class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

class StackObject {
    constructor() {
        this.items = {}
        this.head = 0
    }

    push(element) {
        this.items[this.head] = element
        this.head++
    }

    pop() {
        const item = this.items[this.head - 1]
        delete this.items[this.head - 1]
        this.head--
        return item
    }

    peek() {
        return this.items[this.head - 1]
    }

    size() {
        return this.head
    }

    isEmpty() {
        return this.head === 0
    }

    print() {
        console.log(this.items)
    }
}


// here we create a class for queueing that uses an object instead of an array (for lower time complexity)
// note the example of variable names getting created on-the-fly
class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    addToQueue(element) {
        this.items[this.rear] = element
        this.rear++
    }

    removeFromQueue() {
        const item = this.items[this.front]
        if (!item) return
        delete this.items[this.front]
        this.front++
        return item
    }
}


//---------------------------------------------------------------------


class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear = -1
        the.front = -1
    }

    isFull() { return this.currentLength === this.capacity }
    isEmpty() { return this.currentLength === 0 }

    addToQueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if (this.front === -1) { this.front = this.rear }
        }
    }

    removeFromQueue() {
        if (this.isEmpty()) { return null }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength += 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    print() {
        if (this.isEmpty()) { console.log('Queue is empty!') }
        else {
            let i
            let str = ''
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ''
                console.log(str)
            }
        }
    }
}


//---------------------------------------------------------------------


// LINKED LIST
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() { return this.size === 0 }
    getSize() { return this.size }

    // Big-O=O(1)
    prepend(value) {
        const node = new Node(value)
        // if list is empty make head point to new node
        if (this.isEmpty()) { this.head = node; this.tail = node }
        // if list has data, set node.next to the current node (head) before making head point to the new node
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // Big-O=O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) { this.head = node; this.tail = node }
        else {
            this.tail.next = node
            this.tail = node
            // // we start with all we have, the node connected to this.head
            // let prev = this.head
            // // traversing through the next until next=null
            // while (prev.next) {
            //     prev = prev.next
            // }
            // prev.next = node
        }
        this.size++
    }

    // insert(value, index) {
    //   if (index < 0 || index > this.size) { return }
    //   if (index === 0) { this.prepend(value) }
    //   else {
    //     const node = new Node(value)
    //     let prev = this.head
    //     // traversing through the next until we reach index - 1
    //     for (let i = 0; i < index - 1; i++) {
    //       prev = prev.next
    //     }
    //     node.next = prev.next  // connects new node to list (by copying next from previous node )
    //     prev.next = node       // connects previous node's next to new node
    //     this.size++
    //   }
    // }

    insert(value, index) {
        if (index === 0) { this.prepend(value) }

        const prev = this.searchByIndex(index - 1)
        if (prev == null) { return null }

        const node = new Node(value)
        node.next = prev.next
        prev.next = node
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) { return null }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd() {
        if (this.isEmpty()) { return null }
        const value = this.tail.value
        if (this.size === 1) {
            this.head = null
            this.tail = null
        }
        else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    // removeFrom(index) {
    //     if (index < 0 || index >= this.size) { return null }
    //     let removedNode
    //     if (index === 0) {
    //         removedNode = this.head
    //         this.head = this.head.next
    //     } else {
    //         let prev = this.head
    //         for (let i = 0; i < index - 1; i++) {
    //             prev = prev.next
    //         }
    //         removedNode = prev.next
    //         prev.next = removedNode.next
    //     }
    //     this.size--
    //     return removedNode.value
    // }

    removeFrom(index) {
        let removedNode
        if (index === 0) { return removedNode = this.removeFromFront() }
        const prev = this.searchByIndex(index - 1)
        if (prev == null) { return null }

        removedNode = prev.next.value
        prev.next = removedNode.next
        this.size--
        return removedNode
    }

    removeValue(value) {
        if (this.isEmpty()) { return null }
        let removedNode
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            // traversing through the next until we reach the node before node with value
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) { return -1 }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) { return i }
            curr = curr.next
            i++
        }
        return -1
    }

    searchByIndex(index) {
        if (index < 0 || index >= this.size) { return null }
        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
        // return curr.value
        return curr
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }

    print() {
        if (this.isEmpty()) { console.log('The list is empty') }
        else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value}->`
                curr = curr.next
            }
            console.log(`${listValues}->null`)
        }
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        ll.prepend(values[i])
    }
    return ll
}
// const list = new LinkedList
// console.log('List is empty? ', list.isEmpty())
// console.log('List size: ', list.getSize())
// list.insert(10, 0)
// list.print()
// list.insert(20, 0)
// list.print()
// list.insert(30, 1)
// list.append(21)
// list.print()
// list.insert(42, 1)
// list.print()
// list.search(42)
// list.print()
// console.log(list.search(30))
// list.reverse()
// list.print()
// console.log(list.removeFromEnd())
// list.print()
// console.log(list.removeFromFront())
// list.print()


//---------------------------------------------------------------------


// HASH TABLE
class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // grabs a reference to an array
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) { return sameKeyItem[1] }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key)
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}
//   const table = new HashTable(50)
//   table.set('name', 'shawn')
//   table.set('mane', 'horsehair')
//   table.set('age', '47')
//   table.display()

//   table.remove('name')
//   table.display()

//   table.set('name', 'Steven')
//   table.set('mnae', 'xxxxxxxx')
//   table.display()
//   console.log(table.get('name'))


//---------------------------------------------------------------------


// BINARY SEARCH TREE
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() { return this.root === null }

    insert(value) {
        const newNode = new TreeNode(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) { root.left = newNode }
            else { this.insertNode(root.left, newNode) }
        } else {
            if (root.right === null) { root.right = newNode }
            else { this.insertNode(root.right, newNode) }
        }
    }

    search(root, value) {
        if (!root) { return false }
        else {
            if (root.value === value) { return true }
            else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        // use optimized queue implementation (above) 
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) { queue.push(curr.left) }
            if (curr.right) { queue.push(curr.right) }
        }
    }

    min(root) {
        if (!root.left) { return root.value }
        else { return this.min(root.left) }
    }
    max(root) {
        if (!root.right) { return root.value }
        else { return this.max(root.right) }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) { return root }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) { return null }
            if (!root.left) { return root.right }
            else if (!root.right) { return root.left }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}
// const bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(8)
// bst.insert(15)
// bst.insert(7)

// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 42))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder(bst.root)

// bst.delete(10)
// bst.levelOrder(bst.root)


//---------------------------------------------------------------------


// GRAPHS
// a. adjacency matrix
// Big-O = O(n) for insert/find
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
console.log(matrix)

// a. adjacency list
// only stores values for edges that exits...less storage
// has the ability to add additional values inside the list...such as weight to edges
// Big-O = O(1) for insert/find
const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        // create the obj-property and the array that belongs to it
        if (!this.adjacencyList[vertex]) { this.adjacencyList[vertex] = new Set() }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) { this.addVertex(vertex1) }
        if (!this.adjacencyList[vertex2]) { this.addVertex(vertex2) }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].delete(vertex2) &&
            this.adjacencyList[vertex2].delete(vertex1))
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) { return }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1))
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }
}
// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')

// graph.addEdge('A', 'B')
// graph.addEdge('B', 'C')

// graph.display()
// console.log(graph.hasEdge('A', 'B'))
// console.log(graph.hasEdge('A', 'C'))

// graph.removeEdge('A', 'B')
// graph.display()

// graph.removeVertex('B')
// graph.display()
