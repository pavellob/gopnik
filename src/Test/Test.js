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
		this.setNextStep = this.setNextStep.bind(this);
		this.state = {
			nextStepId: null,
			answer: null,
			stepId: props.startStepId
		}
	}

	setNextStep(nextStepId, answer) {
		this.setState({nextStepId, answer});
	}

	next() {
    	this.props.answers.push(this.state.answer);
			this.setState({stepId: this.state.nextStepId})
	}

	isLastStep(step) {
		return !(_.has(step.data, 'nextStepId') || _.some(step.data.answers, 'nextStepId'));
	}

	finishTest(){
    this.props.answers.push(this.state.answer);
		this.props.finish(this.props.answers);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.stepId === nextState.nextStepId;
  }

  render(){
  	const step = _.find(this.props.steps, {id: this.state.stepId});

  	const blockName = _.result(step, 'block');
  	let StepComponent = Components[blockName];
  	let Step = StepMixin(StepComponent)

    return (
    	<div className={styles.main_container}>
	    	<div className={styles.top_block}>
					<div className={styles.top_container}>
						<img src={step.data.image} className={styles.img} />
					</div>
	    	</div>
				<div className={styles.card_block}>
					<div className={styles.card_container}>
						<Card>
			    		<Step stepId={this.state.stepId} setNextStep={this.setNextStep} {...step.data}/>
				    	<Actions className={styles.actions} isLastStep={this.isLastStep(step)} next={this.next.bind(this)} finish={this.finishTest.bind(this)} />
						</Card>
					</div>
				</div>
			</div>		
    )
  }
  componentDidUpdate(){
    this.setState({answer: null, nextStepId: null})
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
