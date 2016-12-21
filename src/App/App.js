import React from 'react';
import ReactDOM from 'react-dom';

import Test from '../Test/Test';
import MainResult from '../Result/MainResult';

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
	
	componentDidMount(){
		ReactDOM.render(<Test className={styles.test} finish={this.finishTest.bind(this)} {...this.props.testData}/>,  document.getElementById('root'))
  }

  finishTest(answers){
		const result = this.calculateResult(answers);
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    const Result = () => {
  		return (
  			<div>
  				<MainResult {...result}/>
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
			<div className={styles.main}>
				<div className={styles.header}> 
					<a className={styles.logo} href="/"></a>
				</div>
				<div id="root" className={styles.container}> 
				</div>

				<div className={styles.footer}>
					<span>2016 © Разработано компанией «Дримкас» <a href='https://dreamkas.ru/polzovatelskoe-soglashenie/' target='_blank'>Пользовательское соглашение</a></span>
				</div>
			</div>
		)
	}
	
}

App.defaultProps = {testData: data.test, lawResults: data.result.lawResults, recomendations: data.result.recomendations};


export default App

