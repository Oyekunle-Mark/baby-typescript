/**
 *  *Make a class called "Stack" and give it this LIFO functionality. Our Stack class's storage will be an Array.
 *  TODO You'll want to make two methods in you Stack class: add and remove.
 *  *The add method will push an item into storage. The remove method will remove the last item in storage.
 *  *Lastly, add a method to your Stack class called numOfItems.
 *  !If there are no items in your Stack's storage, then return the message, "There are no items in your Stack."
 *  !If there are items in storage, then return the number of items.
 *  ?Add a storage method that returns the existing stack at it is
 */

interface IStack {
  stack: string[] | number[];
}

class Stack implements IStack {
  public stack: string[] | number[];

  constructor() {
    this.stack = [];
  }

  public add(item: any) {
    this.stack.push(item);
  }

  public remove(): string | number {
    return this.stack.pop();
  }

  public numOfItems(): number | string {
    return this.stack.length
      ? this.stack.length
      : "There are no items in your Stack.";
  }

  public storage(): string[] | number[] {
    return this.stack;
  }
}

const myStack = new Stack();
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
myStack.add("first");
myStack.add("second");
myStack.add("third");
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage()); // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage()); // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage()); // <--- [ 'first' ]
myStack.remove();
console.log(myStack.storage()); // <--- []
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
