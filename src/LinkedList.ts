import {LinkedListNode} from './LinkedListNode'

type Node<T> = LinkedListNode<T> | undefined
export class LinkedList<T> {
  public length = 0
  private headN: Node<T> = undefined
  private tailN: Node<T> = undefined

  public constructor(...values: T[]) {
    for (const i of values) {
      this.add(i)
    }
  }

  public add(val: T): LinkedListNode<T> {
    const node = new LinkedListNode(val)
    if (this.length === 0) {
      this.headN = node
    }
    if (this.tailN === undefined) {
      this.tailN = node
    } else {
      this.tailN.right = node
      node.left = this.tailN
      this.tailN = node
    }
    this.length += 1

    return node
  }

  public forEach<C>(f: ((value: LinkedListNode<T>) => void), ctx?: C): void {
    let node = this.headN
    while (node !== undefined) {
      f.call(ctx, node)
      node = node.right
    }
  }

  public head(): Node<T> {
    return this.headN
  }

  public remove(n: LinkedListNode<T>): void {
    if (n.left !== undefined && n.right !== undefined) {
      n.left.right = n.right
      n.right.left = n.left
    } else if (n.left !== undefined) {
      this.tailN = n.left
      n.left.right = undefined
    } else if (n.right !== undefined) {
      this.headN = n.right
      n.right.left = undefined
    } else {
      this.tailN = undefined
      this.headN = undefined
    }
    if (this.length > 0) {
      this.length -= 1
    }
  }

  public tail(): Node<T> {
    return this.tailN
  }
}
