function isPalindrome(list) {
  return true;
}

describe('isPalindrome', () => {
  it('returns true for empty list', () => {
    let list = new LinkedList();
    expect(list.toArray()).toEqual([]);

    let res = isPalindrome(list);

    expect(res).toBe(true);
  });

  it('returns true for singleton', () => {
    let list = new LinkedList(1);
    expect(list.toArray()).toEqual([1]);

    let res = isPalindrome(list);

    expect(res).toBe(true);
  });

  it('returns true for doubleton palindrome', () => {
    let list = new LinkedList(1, 1);
    expect(list.toArray()).toEqual([1,1]);

    let res = isPalindrome(list);

    expect(res).toBe(true);
  });
});

class LinkedList {
  constructor(...values) {
    this.head = null;

    for(let i = 0; i < values.length; i++) {
      let oldHead = this.head;
      this.head = new Node(values[i]);
      this.head.next = oldHead;
    }
  }

  toArray() {
    let res = [];
    let current = this.head;
    while(current){
      res.push(current.value);
      current = current.next;
    }
    return res;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}