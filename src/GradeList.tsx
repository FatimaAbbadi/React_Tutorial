import * as React from 'react';


type GradeListProps = {
    addGradeList: (courseName:string, courseGrade:string) => void,
    gradeList: { courseName: string, grade: string }[]

}
type GradeListState = {
    coursename:string,
    coursegrade:string,
}


export default class GradeList extends React.Component<GradeListProps, GradeListState>{   //We need the intellisence thats why we added <>
    constructor(props: GradeListProps) {
        super(props)
        this.state = {
            coursename:"",
            coursegrade:""
        }
    }
    // componentDidMount() {
    //     this.setState({...this.state, gradeList:this.props.gradeListProps})
    // }

    render() {
        return <div className="container">
            <div className="buttons">
                <h1>Grade List:</h1>
                <br></br>
                <div>
                    <table>
                        <tr><td><b>GRADE LIST</b></td></tr>
                        <tr><td>
                            <ul>
                                { this.props.gradeList.map((item, index) => (
                                    <li>
                                        Course name: {item.courseName} <br></br> Grade:{item.grade}<br></br><br></br>
                                    </li>
                                ))}
                            </ul>
                        </td></tr>
                    </table>
                </div>
                <div className="buttons">
                    Add new course name/grade: 
                    <input type="text" value={this.state.coursename} onChange={e => this.setState({ ...this.state, coursename: e.target.value })}></input>
                    <input type="text" value={this.state.coursegrade} onChange={e => this.setState({ ...this.state, coursegrade: e.target.value })}></input>
                    <br></br>
                   

{/*                     <button onClick={() => this.setState({...this.state,gradeList:this.state.gradeList.concat([{courseName:this.state.coursename, grade:this.state.coursegrade}])})}>Add</button>
 */}
                    <button onClick={e => this.props.addGradeList(this.state.coursename,this.state.coursegrade)}>Add</button>

                </div>
            </div>
        </div>
    }
}