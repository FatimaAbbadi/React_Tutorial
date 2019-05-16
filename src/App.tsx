import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Institute from './Institute';

/* render(<Counter text={"Fatima Abbadi"}/>, document.getElementById('main')); */

/* render(<Iscrizione nome={"Fatima"} cognome={"Abbadi"} bsn={1234555} sex={"female"}/>, document.getElementById('main')); */

/* render(<Institute />, document.getElementById('main'));  */


 
function Hello() {
    return <h2>Hello World</h2>;
}

render(
    <Router>
        <Route path="/Institute/:studentBSN" component={Institute}/>
        <Route path="/hello" component={Hello}/>
    </Router>,
    document.getElementById('main')
);


