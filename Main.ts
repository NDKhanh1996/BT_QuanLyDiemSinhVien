import {Student} from "./student";

let a = new Student();
a.insertFirst('A', 9)
a.insertFirst('B', 2)
a.insertFirst('C', 3)
a.insertLast('D', 4)

// console.log(a.totalStudentsFail())
console.log(a.listStudentMaxScore())
// console.log(a.showList())
// console.log(a.findByName('B'))