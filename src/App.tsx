import * as React from 'react';
import { render } from 'react-dom';

import Iscrizione from './Iscrizione';

/* render(<Counter text={"Fatima Abbadi"}/>, document.getElementById('main')); */

render(<Iscrizione nome={"Fatima"} cognome={"Abbadi"} bsn={1234555} sex={"female"}/>, document.getElementById('main'));