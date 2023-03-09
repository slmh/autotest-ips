//  4. Создайте список группы из 4 студентов (массив объектов) и напечатайте в консоль их имена и возраст.

type Student = {
    name: string, 
    age: number, 
    id?: number
}

const groupStudents: Student[] = []

groupStudents.push(
    {name: 'john', age: 30, id: 1234}, 
    {name: 'ivan', age: 40},
    {name: 'anna', age: 25, id: 5678}, 
    {name: 'jack', age: 40}
);

groupStudents.forEach((student: Student) => console.log(student.name, student.age))
