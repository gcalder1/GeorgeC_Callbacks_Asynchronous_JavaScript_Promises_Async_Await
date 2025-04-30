function addStudentToClass(nameStudent, ageStudent){
    return new Promise((accStudentToClass, rejStudentFromClass) => {
        if (ageStudent < 18){
            rejStudentFromClass(`${nameStudent} is too young for this class`);
        } else {
            setTimeout(() => {
                accStudentToClass(`${nameStudent}, was added to the class`);
            }, Math.floor(Math.random() * 2001) + 1000);
        }
    }) 
} 

async function registerStudent(student){
    try {
        const msg = await addStudentToClass(student.name, student.age);
        console.log('The following student:', msg);
    } catch (err) {
        console.error(`${err}.`, 'Please send him away.');
    }
}
    

// This code should sit at the bottom of your
// solution
// Plan accordingly
const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

for (const student of students) {
    registerStudent(student);
}
