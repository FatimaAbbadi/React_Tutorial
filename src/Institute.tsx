import * as React from 'react';

type InstituteProps = {
}
type InstituteState = {
    studentBsn:number
}


export default class Institute extends React.Component<InstituteProps,InstituteState>{   //We need the intellisence thats why we added <>
    constructor(props: InstituteProps) {
        super(props)
        this.state = {studentBsn:0}
    }
 

    render() {
        return <div className="container">
             <div className="buttons">
       {/*          Student BSN: <input type="text" value={this.state.studentBsn} onChange={e => this.setState({ ...this.state, studentBsn: e.target.value })}></input> <br></br>
       */}         {/*  <button onClick={e => this.props.updateAge(1)} >SHOW</button> */}
               </div>
         </div>
    }
}