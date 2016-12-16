import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App/App';
import styles from './index.css';


injectTapEventPlugin();

ReactDOM.render(<App/>, document.querySelector('#app'));
