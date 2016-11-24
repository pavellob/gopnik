import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DkComponents from './widgets/DkComponents'
import StepMixin from './Step';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import testData from './test_data';

const { startStepId, steps } = testData;

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.setNextStep = this.setNextStep.bind(this);
		this.state = {
			nextStepId: null,
			answer: null,
			stepId: startStepId
		}
	}

	setNextStep(nextStepId, answer) {
		this.setState({nextStepId, answer});
	}

	next() {
		if (this.state.nextStepId) {
    	this.props.answers.push(this.state.answer);
			this.setState({stepId: this.state.nextStepId})
		}
	}

	isLastStep(step) {
		return !(_.has(step.data, 'nextStepId') || _.some(step.data.answers, 'nextStepId'));
	}

	finishTest(){
		this.props.finish(this.props.answers);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.stepId === nextState.nextStepId;
  }

  render(){
  	const step = _.find(this.props.steps, {id: this.state.stepId});

  	const styles = {
			paper: {
  			display: 'flex',
  			flexGrow: 1,
    		flexDirection: 'column',
    		padding: 40,
				backgroundImage: step.data.background,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			},
			step: {
				minHeight: 600,
    		flexGrow: 1,
    		display: 'flex',
    		flexDirection: 'column',
			}
		}
  	const blockName = _.result(step, 'block');
  	let StepComponent = DkComponents[blockName];
  	let Step = StepMixin(StepComponent)

    return (
			<MuiThemeProvider>
				<Paper zDepth={3} style={styles.paper} >
	    		<Step  style={styles.step} stepId={this.state.stepId} setNextStep={this.setNextStep} {...step.data}/>
		    	<Actions isLastStep={this.isLastStep(step)} next={this.next.bind(this)} finish={this.finishTest.bind(this)} />
				</Paper>
			</MuiThemeProvider>

    )
  }

  componentDidUpdate(){
    this.setState({answer: null, nextStepId: null})
  }

  componentWillUnmount(){
  	console.log('will unmount')
  }

}

Test.defaultProps = {steps, answers: [], nextStepId: startStepId};

class Actions extends React.Component {

	renderActions() {
		if (this.props.isLastStep) {
			return (
				<RaisedButton label="Завершить" primary={true} onClick={this.props.finish}/>
			)
		} else {
			return (
				<div>
					<FlatButton label="Назад" primary={true} />
					<RaisedButton label="Дальше" primary={true} onClick={this.props.next}/>
				</div>
			)
		}
	}

	render() {
		const styles = {
			display: 'flex',
			justifyContent: 'flex-end'
		}
		return (
			<div style={styles}>	
				{this.renderActions()}
			</div>
		)
	}
}

export default Test;
