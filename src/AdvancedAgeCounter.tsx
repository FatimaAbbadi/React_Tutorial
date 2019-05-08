import * as React from 'react';
import { number } from 'prop-types';


type AgeCounterProps = {
    updateAge: (delta: number) => void,
    age: number
}
type AgeCounterState = {}


export default class AdvancedAgeCounter extends React.Component<AgeCounterProps, AgeCounterState>{   //We need the intellisence thats why we added <>
    constructor(props: AgeCounterProps) {
        super(props)
        /*         this.handleAgeCounterInc = this.handleAgeCounterInc.bind(this)
                this.handleAgeCounterDec = this.handleAgeCounterDec.bind(this) */
        this.state = {updatedCycleAge:props.age}
    }
    componentWillUnmount() {
        console.log("I am off and my life cycle is closed")
    }

    componentDidMount() {
        console.log("I am on and my life cyle is started after the render")
    }

    componentWillReceiveProps(nextProps: AgeCounterProps) {

        console.log("Happy birthday . Your new age is: " + nextProps.age)
     }

     componentWillMount(){
        console.log("component mounted")
        let count = 3
        let my_custom_timeout = () =>
          setTimeout(() =>
           {
              if(count <= 0) {
                console.log("Bye bye out.")
                return
              }
              else{ 
                console.log("Hello time out", count)
                this.setState({ ...this.state, updatedCycleAge: count + this.props.age})
                count = count -1
                my_custom_timeout()
              }
            }
          , 3000)
        my_custom_timeout()


        
        //setInterval(() => console.log("Hello interval"), 3000) // :(
      }

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