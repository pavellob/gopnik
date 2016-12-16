import React from 'react';
import ReactDOM from 'react-dom';


import Welcome from '../Welcome/Welcome';
import Test from '../Test/Test';
import LawResult from '../Result/LawResult';
import DeviceRecomendation from '../Result/DeviceRecomendation';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import styles from './App.css';
import data from '../test_data';


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			result: null,
			lawResult: null,
			recomendation: null
		}
	}
	
	mount(){
		ReactDOM.render(<Test className={styles.test} finish={this.finishTest.bind(this)} {...this.props.testData}/>,  document.getElementById('root'))
  }

  finishTest(answers){
		const result = this.calculateResult(answers);
		console.log(answers);
		console.log(result);
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    const Result = () => {
  		return (
  			<div>
  				<LawResult {...result.lawResult}/>
  				<DeviceRecomendation {...result.recomendation}/>
  			</div>
  		)
    }

    ReactDOM.render(<Result />,  document.getElementById('root'))
	}

	calculateResult(answers) {
		const anwsIds = _.map(answers, 'id');
		return {
			lawResult: _.result(_.find(this.props.lawResults, r => {
				return _.some(r.bindings, bind => {
					return _.every(bind, b => anwsIds.includes(b));
				})
			}), 'data'),
			recomendation: _.result(_.find(this.props.recomendations, r => {
				return _.some(r.bindings, bind => {
					return _.every(bind, b => anwsIds.includes(b));
				})
			}), 'data')
		}
	}

	render() {
		return (
			<div>
				<div className={styles.header}> 

				</div>
				<div className={styles.container}>
					<div className={styles.top_container}>
					</div>
					<div id="root" className={styles.main}> 
					</div>
				</div>

				<div className={styles.footer}>
				</div>
			</div>
		)
	}
	componentDidMount(){
    console.log('mounted')
    ReactDOM.render(<Welcome label="Начать"  start={this.mount.bind(this)}/>,  document.getElementById('root'))

  }
}

App.defaultProps = {testData: data.test, lawResults: data.result.lawResults, recomendations: data.result.recomendations};


export default App

