import * as React from 'react';
import { Student } from './Institute';
import { string } from 'prop-types';


type NewStudentProps = {
    addStudent: (s: Student) => void
    cancelStudent: () => void
}
type NewStudentState = {
    name: string,
    surname: string,
    age: number,
    bsn: string
}


export default class NewStudent extends React.Component<NewStudentProps, NewStudentState>{   //We need the intellisence thats why we added <>
    constructor(props: NewStudentProps) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            age: 0,
            bsn: ""
        }
    }

    render() {
        return <div className="container">
            <div className="buttons">
                <h1>NEW STUDENT DATA:</h1>
                <br></br>
                <div>
                    <table>
                        <tr><td>Name: <input type="text" value={this.state.name} onChange={e => this.setState({ ...this.state, name: e.target.value })}></input></td></tr>
                        <tr><td>Surname: <input type="text" value={this.state.surname} onChange={e => this.setState({ ...this.state, surname: e.target.value })}></input></td></tr>
                        <tr><td>Age: <input type="text" value={this.state.age} onChange={e => this.setState({ ...this.state, age: parseInt(e.target.value) })}></input></td></tr>
                        <tr><td>BSN: <input type="text" value={this.state.bsn} onChange={e => this.setState({ ...this.state, bsn: e.target.value })}></input></td></tr>
                    </table>
                </div>
                <div>
                    <button onClick={e => this.props.addStudent({ age: this.state.age, bsn: this.state.bsn, name: this.state.name, surname: this.state.surname, gradeList: [], courseList: [], student_id: 0 })}>Add</button>
                    <button onClick={e => this.props.cancelStudent()}>Cancel</button>
                </div>
            </div>
        </div>
    }
}