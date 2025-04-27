class SchoolProject {
    constructor() {
        this.students = [];
    }

    addStudent(name: string, grade: number): void {
        const student = { name, grade };
        if (!this.students.includes(student)) {
            this.students.push(student);
        }
    }

    sortStudents(): void {
        this.students.sort((a, b) => a.grade - b.grade);
    }
}

// Example usage
const schoolProject = new SchoolProject();
schoolProject.addStudent("Alice", 10);
schoolProject.addStudent("Bob", 9);
schoolProject.addStudent("Charlie", 8);

schoolProject.sortStudents();

console.log(schoolProject.students);
