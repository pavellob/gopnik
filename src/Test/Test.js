import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Components from '../Components/Components'
import StepMixin from './Step';

import {Button} from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';

import styles from './Test.css';


class Test extends React.Component {
	constructor(props) {
		super(props);
		this.resolveStep = this.resolveStep.bind(this);
		this.state = {
			nextStepId: null,
			answer: null,
			step: this.getStep(props.startStepId),
			stepComplete: false,
			transaction: false,
		}
	}

	getStep(stepId) {
		return _.find(this.props.steps, {id: stepId});
	}

	resolveStep(result) {
		console.log('resolveStep:', result);
		const newState = {stepComplete: result.isComplete};
		if (result.isComplete && result.answer) {
			_.assign(newState, {answer: result.answer});
		}
		this.setState(newState);
	}

	next() {
			console.log('next press:')
			if(this.state.stepComplete) {

				if (this.state.answer) {
					let answ = _.pick(this.state.step.data, 'ix');
					answ = _.merge(answ, {answer: _.result(this.state.answer, 'label')}, _.pick(this.state.answer, 'id'));
	    		this.props.answers.push(answ);
				}
				const newStepId = _.result(this.state.answer, 'nextStepId', _.result(this.state.step.data, 'nextStepId'));
				const newStep = this.getStep(newStepId);
				const newNextStepId = _.result(newStep.data, 'nextStepId');
	    	this.setState({step: newStep, nextStepId: newNextStepId, transaction: true});
			}
	}

	isLastStep(step) {
		return !(_.has(step.data, 'nextStepId') || _.some(step.data.answers, 'nextStepId'));
	}

	finishTest(){
		if(this.state.stepComplete){
			let answ = _.pick(this.state.step.data, 'ix');
			answ = _.merge(answ, {answer: _.result(this.state.answer, 'label')}, _.pick(this.state.answer, 'id'));

	    this.props.answers.push(answ);
			this.props.finish(this.props.answers);
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.stepComplete && nextState.transaction;
  }

  render(){
  	const blockName = _.result(this.state.step, 'block');
  	let StepComponent = Components[blockName];
  	let Step = StepMixin(StepComponent);
  	let isFirst = (this.state.step.id === this.props.startStepId);
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
			    		<Step resolveStep={this.resolveStep} {...this.state.step.data}/>
				    	<Actions className={styles.actions} isLastStep={this.isLastStep(this.state.step)} isFirst = {isFirst}  next={this.next.bind(this)} finish={this.finishTest.bind(this)} />
						</Card>
					</div>
				</div>
			</div>		
    )
  }
  componentDidUpdate(){
  	this.setState({transaction: false, stepComplete: false});
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
			console.log(this.props);
			let lbl =  this.props.isFirst ? "Поехали" : "Дальше";

			return (
				<Button label={lbl} primary={true} onClick={this.props.next} primary raised/>
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
