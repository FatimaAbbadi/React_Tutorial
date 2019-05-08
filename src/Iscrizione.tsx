import * as React from 'react';
import { number } from 'prop-types';
import Counter from './Counter';
import AgeCounter from './AgeCounter';
import AdvancedAgeCounter from './AdvancedAgeCounter';


type IscrizioneProps = { nome: string, cognome: string, bsn: number, sex: sex }
type IscrizioneState = { nome: string, cognome: string, bsn: number, sex: sex, showStato: statoTabella, age: number } //Cosi si possono modificare
type sex = "male" | "female" | "not specified"
type statoTabella = "show" | "collapse"

export default class Iscrizione extends React.Component<IscrizioneProps, IscrizioneState>{   //We need the intellisence thats why we added <>
  constructor(props: IscrizioneProps, context) {
    super(props, context)
    this.state = { nome: props.nome, cognome: props.cognome, bsn: props.bsn, sex: props.sex, showStato: "collapse", age: 0 }
    this.updateAge = this.updateAge.bind(this)
  }

  updateAge(delta: number) {
    this.setState((curState) => ({ ...curState, age: curState.age + delta }))  //this updates the current state
    //this.setState({...this.state, age: this.state.age + ageChange})        //this update state might have a delay
  }

  componentDidMount()
  {
    console.log("component PARENT mounted")
    let my_custom_timeout = () =>
      setTimeout(() =>
       {
          if(this.state.age > 100) {
            console.log("Bye bye out.")
            return
          }
          else{ 
            console.log("Hello my age now is ", this.state.age)
            this.setState({ ...this.state, age: this.state.age + 1}, () => my_custom_timeout()) //Avoids overlapping of setstate and is safer
            // this.setState({ ...this.state, age: this.state.age + 1})   //Faster but overlaps
            // my_custom_timeout()
          }
        }
      , 0)
    my_custom_timeout()

  }
  render() {
    return <div className="container">
      <div>PARENTS DETAILS</div>

      First name: <input type="text" value={this.state.nome} onChange={e => this.setState({ ...this.state, nome: e.target.value })}></input> <br></br>
      Mothers surname: {this.props.cognome}<br></br>
      Age: {this.state.age}<br></br>
      BSN: {this.props.bsn}<br></br>
      <div className="radio">
        <label>
          <input type="radio" checked={this.state.sex == "male"} onChange={e => this.setState({ ...this.state, sex: "male" })} />
          Male
                    </label>
      </div><br></br>
      <div className="radio">
        <label>
          <input type="radio" checked={this.state.sex == "female"} onChange={e => this.setState({ ...this.state, sex: "female" })} />
          Female
                    </label>
      </div>

      <button onClick={e => this.setState({ ...this.state, showStato: this.state.showStato == "show" ? 'collapse' : 'show' })} >
        {this.state.showStato == 'collapse' ? 'show' : 'collapse'}
      </button>
      {this.state.showStato == "show" ?
        <div>
          <table>
            <tr><td>Nome {this.state.nome}</td></tr>
            <tr><td>Cognome {this.state.cognome}</td></tr>
            <tr><td>Bsn {this.state.bsn}</td></tr>
            <tr><td>Sex {this.state.sex}</td></tr>
          </table>
          {/*   <AgeCounter myAge={this.updateAge.bind(this)} age={this.state.age} /> */}
          <AgeCounter updateAge={this.updateAge} age={this.state.age} />
          {/* <AgeCounter updateAge={(delta) => this.setState((curState) => ({...curState, age: curState.age + delta}))} 
                              age={this.state.age} /> */}

          <AdvancedAgeCounter updateAge={this.updateAge} age={this.state.age} />
        </div> : null}
    </div>
  }
}