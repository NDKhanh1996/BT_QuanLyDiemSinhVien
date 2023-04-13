import {Node} from "./node";

export class Student<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // findByName() để tìm kiếm và hiển thị (các) sinh viên theo tên.
    insertFirst(name: T, score: number) {
        let node = new Node(name, score) // create node
        node.next = this.head; // node was created above became head
        this.head = node // old head be pushed to right

        if (!this.tail) { // if you don't have tail
            this.tail = node; // new node was created above became tail
        }
        this.size++ // increasing size
    }

    insertLast(name: T, score: number) {
        if (!this.head) { //don't have head
            this.insertFirst(name, score) // insert head instead
        } else {
            let node = new Node(name, score) // create node
            if (this.tail !== null) {
                this.tail.next = node; // link old tail to new node (old tail on left, new node on right)
            }
            // this.tail.next = node;
            this.tail = node; // new node was created above became tail
            this.size++; // increasing size
        }
    }

    showList(): [T, number][] { // -------------- check
        let listData = [] // create a list to show
        let currentNode = this.head // the first node in cycle become head

        while (currentNode !== null) { // if still have node
            listData.push(currentNode.readData()); // use method readDate to get data of currentNode, then push to listData
            currentNode = currentNode.next; // currentNode become the next right to it
        }
        return listData; // return display result
    }

    totalStudentsFail(): number {
        let count = 0;
        for (let i: any = 0; i < this.showList().length; i++) {
            if (this.showList()[i][1] <= 5){
                count ++
            }
        }
        return count
    }
    listStudentMaxScore(){
        let maxScore = 0; // type any --------------

        for (let i = 0; i < this.showList().length; i++) {
            this.showList().forEach(i => {
                if (i[1] > maxScore) {
                    maxScore = i[1]
                }
            })
        }
        return maxScore
    }
    findByName(name: string){
        for (let i = 0; i < this.showList().length; i++) {
            if (this.showList()[i][0] === name){
                return this.showList()[i]
            }
        }
    }
}

