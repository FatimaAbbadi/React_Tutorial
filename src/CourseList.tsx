import * as React from 'react';


type CourseListProps = {
    courseList: string[]
}
type CourseListState = {}


export default class CourseList extends React.Component<CourseListProps, CourseListState>{   //We need the intellisence thats why we added <>
    constructor(props: CourseListProps) {
        super(props)
        this.state = {}
    }

    render() {
        return <div className="container">
            <div className="buttons">
                <h1>COURSE LIST:</h1>
                <br></br>
                <div>
                    <table>
                        <tr><td><b>COURSE NAME</b><br></br><br></br></td></tr>
                        {this.props.courseList.map((item, key) => <tr><td>{item} </td></tr>)}
                    </table>
                </div>

            </div>
        </div>
    }
}