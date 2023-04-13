export class Node<T> {
    name: T;
    score: number;
    next: Node<T> | null = null;

    constructor(name: T, score: number) {
        this.name = name;
        this.score = score;
    }

    readData(): [T, number] {
        return [this.name, this.score];
    }
}