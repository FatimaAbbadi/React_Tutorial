import * as React from 'react';
import StudentComponent from './Student';
import GradeList from './GradeList';
import NewStudent from './newStudent';

type Person = {
    name: string
    surname: string
    age: number
    bsn: string
}

/* type Course = { courseList: string[] }
 */
let courseList = ["Maths I", "Maths II", "Web Development", "Database Administration", "Digital Management", "Computer Networking"]

export type Student = Person &
{
    student_id: number,
    courseList: string[],
    gradeList: { courseName: string, grade: string }[]
}

let student1: Student = {
    student_id: 12345,
    name: "Fatima",
    surname: "Abbadi",
    age: 19,
    bsn: "ASD123",
    courseList: ["Maths I", "Web Development", "Database Administration", "Digital Management"],
    gradeList: [
        { courseName: "Maths I", grade: "68" },
        { courseName: "Database Administration", grade: "78" },
    ]
}

let student2: Student = {
    student_id: 54321,
    name: "Mudy",
    surname: "Abbadi",
    age: 20,
    bsn: "ASD125",
    courseList: ["Maths I", "Web Development", "Database Administration", "Digital Management"],
    gradeList: [
        { courseName: "Maths II", grade: "90" },
        { courseName: "Art", grade: "78" },
    ]
}

/* type InstituteProps = {
} */
type InstituteState = {
    BSN_query: string,
    title: string,
    showStato: statoTabella,
    students: Student[],
    checkStateStudents: boolean
}
type statoTabella = "search" | "close"

export default class Institute extends React.Component<any, InstituteState>{   //We need the intellisence thats why we added <>
    constructor(props: any) {
        super(props)
        console.log(props)
        this.state = {
            BSN_query: "0",
            title: "Welcome to Ca' Foscari University!",
            showStato: "close",
            students: [student1, student2],
            checkStateStudents: false
        }
    }
    // Student => ((CourseName, CourseGrade) => void)
    updateGradeList(student: Student) {
        return (courseName: string, courseGrade: string) => {
            student = {
                ...student,
                gradeList: student.gradeList.concat([{ courseName: courseName, grade: courseGrade }])
            }
            this.setState({ ...this.state, students: this.state.students.map(ts => ts.bsn == student.bsn ? student : ts), checkStateStudents: true })
        }

    }

    addStudent(s: Student) {
        this.setState({ ...this.state, students: this.state.students.concat([s]), checkStateStudents: true })

    }

    cancelStudent() {
        this.setState({ ...this.state, showStato: "close" })

    }

    componentDidMount() {

        let my_custom_timeout = () =>
            setTimeout(() => {
                if (this.state.checkStateStudents == true) {
                    console.log("saving......")
                    this.setState({ ...this.state, checkStateStudents: false }, () =>
                        my_custom_timeout())
                }
                else {
                    console.log("Nothing to save")
                    my_custom_timeout()
                }
            }
                , 5000)
        my_custom_timeout()
    }

    render() {
        console.log("vv")
        let filtered_students = this.state.students.filter(s => s.bsn.toLowerCase().includes(this.state.BSN_query.toLowerCase()))
        return <div className="container">
            <h1>{this.state.title}</h1>
            <div className="buttons">
                Student BSN: <input type="text" value={this.state.BSN_query} onChange={e => this.setState({ ...this.state, BSN_query: e.target.value })}></input>
                <br></br>


                <button onClick={e => this.setState({ ...this.state, showStato: this.state.showStato == "search" ? 'close' : 'search' })} >
                    {this.state.showStato == 'close' ? 'search' : 'close'}
                </button>
                {this.state.showStato == "search" ?
                    filtered_students.length > 0 ?
                        filtered_students.map(s => <StudentComponent addGradeList={this.updateGradeList(s)} student={s} />)
                        : <div>
                            <div>
                                <NewStudent addStudent={this.addStudent.bind(this)} cancelStudent={this.cancelStudent.bind(this)} />
                            </div>
                        </div>
                    : null}
            </div>
        </div>
    }
}