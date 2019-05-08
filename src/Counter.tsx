import * as React from 'react';
import { number } from 'prop-types';


type CounterProps = {text:string}
type CounterState = { counter: number }


export default class Counter extends React.Component<CounterProps, CounterState>{   //We need the intellisence thats why we added <>
    constructor(props: CounterProps, context) {
        super(props, context)
        this.state = { counter: 0 }
    }
    render() {
        return <div className="container">
            <div>Some text from parent ...{this.props.text}</div>
            <div className="buttons">
                <button onClick={e=>alert("Hello")} >Say Hi!</button>  
                <button onClick={e=> this.setState({...this.state,counter:this.state.counter + 1})} >inc</button>
                <button onClick={e=> this.setState({...this.state,counter:this.state.counter - 1})} >dec</button>
            </div>
            Counter {this.state.counter}
            </div>
    }
}