type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(value: T): void {
        const node = {
            value: value,
            prev: this.head,
        } as Node<T>;

        this.length++;
        this.head = node;
    }
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.prev;
        this.length--;

        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
