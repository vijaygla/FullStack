export const Practice = () => {
    const student = ["Vijay Kumar", "Aman", "Ravi", "Banti"];

    console.log(student[0]);

    return (
        <>
            <h1>Interview Question</h1>
            <p>{student.length==0 ?"No Students Founds" : student.length}</p>
            <p>Number of Student: {student.length}</p>
        </>
    )
}
