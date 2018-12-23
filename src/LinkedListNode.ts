export class LinkedListNode<T> {
  public left: LinkedListNode<T> | undefined
  public right: LinkedListNode<T> | undefined

  public constructor(public readonly value: T) {
    this.right = undefined
    this.left = undefined
  }
}
