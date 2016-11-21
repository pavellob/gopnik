import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DkComponents from './widgets/DkComponents'
import Step from './Step';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


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
		console.log('setNextStep');
		this.setState({nextStepId, answer});
	}

	next() {
		if (this.state.nextStepId) {
    	this.props.answers.push(this.props.answer);
			this.setState({stepId: this.state.nextStepId})
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.stepId === nextState.nextStepId;
  }

	isTestFinish(step) {
		return !(_.has(step.data, 'nextStepId') || _.some(step.data.answers, 'nextStepId'));
	}

  render(){
  	const step = _.find(this.props.steps, {id: this.state.stepId});
  	const styles = {
			actions: {
				display: 'flex',
				justifyContent: 'flex-end'
			},
			paper: {
				position: 'relative',
    		padding: 40,
    		margin: 40,
    		minHeight: 600,
    		display: 'flex',
    		flexDirection: 'column',
				backgroundImage: step.data.background,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			}
		}
  	const blockName = _.result(step, 'block');
  	let TestStep = DkComponents[blockName];
    return (
			<Paper zDepth={3} style={styles.paper} >
    		<Step stepId={this.state.stepId} setNextStep={this.setNextStep}>
	    		<TestStep {...step.data}/>
	    	</Step>
	    	<div style={styles.actions}>
					<FlatButton label="Назад" primary={true} />
					<RaisedButton label="Дальше" primary={true} onClick={this.next.bind(this)}/>
				</div>
			</Paper>
    )
  }

  componentDidUpdate(){
  	console.log('didMount');
    this.setState({answer: null, nextStepId: null})
  }
}

Test.defaultProps = {steps, answers: [], nextStepId: startStepId};

export default Test;
