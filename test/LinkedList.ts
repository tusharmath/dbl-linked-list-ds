import * as assert from 'assert'
import {LinkedList} from '../src/LinkedList'
import {LinkedListNode} from '../src/LinkedListNode'

const toArray = <T>(q: LinkedList<T>) => {
  const arr: T[] = []
  q.forEach(x => arr.push(x.value))

  return arr
}

describe('LinkedList', () => {
  describe('add()', () => {
    it('should add()', () => {
      const q = new LinkedList<string>()
      q.add('A')
      q.add('B')
      q.add('C')
      q.add('D')
      assert.strictEqual((q.head() as LinkedListNode<string>).value, 'A')
      assert.strictEqual((q.tail() as LinkedListNode<string>).value, 'D')
      assert.deepStrictEqual(toArray(q), ['A', 'B', 'C', 'D'])
      assert.strictEqual(q.length, 4)
    })
  })
  describe('remove()', () => {
    context('when is non empty', () => {
      it('should remove the first element', () => {
        const q = new LinkedList<string>()
        const a = q.add('A')
        q.add('B')
        q.add('C')
        q.remove(a)

        assert.strictEqual((q.head() as LinkedListNode<string>).value, 'B')
        assert.strictEqual((q.tail() as LinkedListNode<string>).value, 'C')
        assert.deepStrictEqual(toArray(q), ['B', 'C'])
        assert.strictEqual(q.length, 2)
      })

      it('should remove the last element', () => {
        const q = new LinkedList<string>()
        q.add('A')
        q.add('B')
        const c = q.add('C')
        q.remove(c)

        assert.strictEqual((q.head() as LinkedListNode<string>).value, 'A')
        assert.strictEqual((q.tail() as LinkedListNode<string>).value, 'B')
        assert.deepStrictEqual(toArray(q), ['A', 'B'])
        assert.strictEqual(q.length, 2)
      })

      it('should remove any middle element', () => {
        const q = new LinkedList<string>()
        q.add('A')
        const b = q.add('B')
        q.add('C')

        q.remove(b)
        assert.strictEqual((q.head() as LinkedListNode<string>).value, 'A')
        assert.strictEqual((q.tail() as LinkedListNode<string>).value, 'C')
        assert.deepStrictEqual(toArray(q), ['A', 'C'])
        assert.strictEqual(q.length, 2)
      })
    })
    context('when has one element', () => {
      it('should remove that element', () => {
        const q = new LinkedList<string>()
        const a = q.add('A')
        q.remove(a)

        assert.strictEqual(q.head(), undefined)
        assert.strictEqual(q.tail(), undefined)
        assert.deepStrictEqual(toArray(q), [])
        assert.strictEqual(q.length, 0)
      })
    })
    context('when is empty', () => {
      it('should remove only than once', () => {
        const q = new LinkedList<string>()
        const a = q.add('A')
        q.remove(a)
        q.remove(a)
        assert.strictEqual(q.length, 0)
      })
    })
  })
  describe('forEach()', () => {
    it('should iterate over the list ', () => {
      const results: number[] = []
      const q = new LinkedList<number>()
      q.add(1)
      q.add(2)
      q.add(3)
      q.add(4)
      q.forEach(i => results.push(i.value * 100))
      assert.deepStrictEqual(results, [100, 200, 300, 400])
    })
  })

  describe('constructor()', () => {
    it('should add values passed to the constructor', () => {
      const results: number[] = []
      const q = new LinkedList(1, 2, 3, 4, 5)
      q.forEach(i => results.push(i.value))

      const expected = [1, 2, 3, 4, 5]
      assert.deepStrictEqual(results, expected)
    })
  })

  describe('shift()', () => {
    it('should return the head', () => {
      const q = new LinkedList(1, 2, 3, 4, 5)
      const actual = q.shift()
      const expected = 1
      assert.strictEqual(actual, expected)
    })

    it('should return undefined', () => {
      const q = new LinkedList<number>()
      const actual = q.shift()
      const expected = undefined
      assert.strictEqual(actual, expected)
    })
  })

  describe('pop()', () => {
    it('should return the head', () => {
      const q = new LinkedList(1, 2, 3, 4, 5)
      const actual = q.pop()
      const expected = 5
      assert.strictEqual(actual, expected)
    })

    it('should return undefined', () => {
      const q = new LinkedList<number>()
      const actual = q.pop()
      const expected = undefined
      assert.strictEqual(actual, expected)
    })
  })
})
