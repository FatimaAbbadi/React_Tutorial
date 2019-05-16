import * as React from 'react';
import CourseList from './CourseList';
import GradeList from './GradeList';
import { string } from 'prop-types';
import { Student } from './Institute';



type StudentComponentProps = {
    addGradeList: (courseName:string, courseGrade:string) => void,
    student: Student
}
type StudentComponentState = {}

export default class StudentComponent extends React.Component<StudentComponentProps, StudentComponentState>{   //We need the intellisence thats why we added <>
    constructor(props: StudentComponentProps) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="container">
            <div className="buttons">
                <h1>Hello Student</h1>
                <br></br>
                Student BSN: {this.props.student.bsn}<br></br>
                <div>
                    <table>
                        <tr><td>Name {this.props.student.name}</td></tr>
                        <tr><td>Surname {this.props.student.surname}</td></tr>
                        <tr><td>Age {this.props.student.age}</td></tr>
                    </table>
                    <CourseList courseList={this.props.student.courseList} />
                    <GradeList addGradeList={this.props.addGradeList} gradeList={this.props.student.gradeList} />
                </div>

            </div>
        </div>
    }
}