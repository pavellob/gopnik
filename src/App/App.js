import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Test from '../Test/Test';
import Result from '../Result/Result';
import Welcome from '../Welcome/Welcome';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './App.css';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			result: null
		}
	}
	
	mount(){
		ReactDOM.render(<Test className={styles.test} finish={this.finishTest.bind(this)}/>, document.getElementById('root'))
  }

  finishTest(result){
		console.log(result);
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    ReactDOM.render(<Result testAnswers={result}/>, document.getElementById('root'))
	}

	render() {
		return (
			<div id="root" className={styles.main}> </div>
		)
	}
	componentDidMount(){
    console.log('mounted')
    ReactDOM.render(<Welcome label="Начать"  start={this.mount.bind(this)}/>, document.getElementById('root'))

  }
}

App.defaultProps = {answers: []};


export default App

