import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Components from '../Components/Components'
import StepMixin from './Step';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import {Button} from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';

import styles from './Test.css';


class Test extends React.Component {
	constructor(props) {
		super(props);
		console.log('props');
		this.setNextStep = this.setNextStep.bind(this);
		this.state = {
			nextStepId: null,
			answer: null,
			step: _.find(props.steps, {id: props.startStepId})
		}
	}

	setNextStep(answer) {
		this.setState({answer: answer});
	}

	next() {
			if (this.state.answer) {
    		this.props.answers.push(this.state.answer);
			}
			const newStepId = _.result(this.state.answer, 'nextStepId', _.result(this.state.step.data, 'nextStepId'));
			const newStep = _.find(this.props.steps, {id: newStepId});
			const newNextStepId = _.result(newStep.data, 'nextStepId');
    	this.setState({step: newStep, nextStepId: newNextStepId});
	}

	isLastStep(step) {
		return !(_.has(step.data, 'nextStepId') || _.some(step.data.answers, 'nextStepId'));
	}

	finishTest(){
    this.props.answers.push(this.state.answer);
		this.props.finish(this.props.answers);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextState.nextStepId, this.state.nextStepId);
		return nextState.nextStepId !== this.state.nextStepId;
  }

  render(){
  	console.log('rendr');
  	const blockName = _.result(this.state.step, 'block');
  	let StepComponent = Components[blockName];
  	let Step = StepMixin(StepComponent)
    return (
    	<div className={styles.main_container}>
	    	<div className={styles.top_block}>
					<div className={styles.top_container}>
						<img src={this.state.step.data.image} className={styles.img} />
					</div>
	    	</div>
				<div className={styles.card_block}>
					<div className={styles.card_container}>
						<Card>
			    		<Step setNextStep={this.setNextStep} {...this.state.step.data}/>
				    	<Actions className={styles.actions} isLastStep={this.isLastStep(this.state.step)} next={this.next.bind(this)} finish={this.finishTest.bind(this)} />
						</Card>
					</div>
				</div>
			</div>		
    )
  }
  componentDidUpdate(){
  	console.log('did update')
  	//const nextStepId = this.state.answers.nextStepId || this.state.step.nextStepId;
    //this.setState(_.pick(this.state.answer, 'nextStepId', _.pick(this.state.step, 'nextStepId')));
  }

  
  componentWillUnmount(){
  	console.log('will unmount')
  }
}

Test.defaultProps = {answers: []};

class Actions extends React.Component {

	renderActions() {
		if (this.props.isLastStep) {
			return (
				<Button label="Завершить" onClick={this.props.finish} primary raised/>
			)
		} else {
			return (
				<Button label="Дальше" primary={true} onClick={this.props.next} primary raised/>
			)
		}
	}

	render() {
		
		return (
			<div className={styles.actions}>	
				{this.renderActions()}
			</div>
		)
	}
}

export default Test;
