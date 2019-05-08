import * as React from 'react';
import { number } from 'prop-types';


type AgeCounterProps = {
    updateAge: (delta:number) => void, 
    age: number 
}
type AgeCounterState = {}


export default class AgeCounter extends React.Component<AgeCounterProps,AgeCounterState>{   //We need the intellisence thats why we added <>
    constructor(props: AgeCounterProps) {
        super(props)
/*         this.handleAgeCounterInc = this.handleAgeCounterInc.bind(this)
        this.handleAgeCounterDec = this.handleAgeCounterDec.bind(this) */
        this.state = {}
    }

    // handleAgeCounterInc = () =>{
    //    this.setState({ ...this.state, agecounter: this.state.agecounter + 1 }) 
    //    this.props.myAge(this.state.agecounter)
    // }
    // handleAgeCounterDec= () =>{
    //    this.setState({ ...this.state, agecounter: this.state.agecounter - 1 })
    //    this.props.myAge(this.state.agecounter)
    // }

    

    render() {
        return <div className="container">
             <div className="buttons">
                <button onClick={e => this.props.updateAge(1)} >inc</button>
                <button onClick={e => this.props.updateAge(-1)} >dec</button>

            </div>
            Age: {this.props.age}<br></br> 
        </div>
    }
}