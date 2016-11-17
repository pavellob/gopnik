import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DkComponents from './widgets/DkComponents'
import Step from './Step';
import testData from './test_data';

const { startStepId, steps } = testData;

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.goToNextStep = this.goToNextStep.bind(this);
		this.state = {
			stepId: this.props.startStepId
		}
	}

	goToNextStep(nextStepId, answer) {
		this.props.answers.push(answer);
		this.setState({stepId: nextStepId});
		console.log(this.props.answers);
		this.render();
	}

  render(){
  	const step = _.find(this.props.steps, {id: this.state.stepId});
  	const blockName = _.result(step, 'block');
  	let TestStep = DkComponents[blockName];
    return (
    	<div>
    		<Step stepId={this.state.stepId} goToNextStep={this.goToNextStep}>
	    		<TestStep {...step.data}/>
	    	</Step>
	    </div>
    )
  }
}

Test.defaultProps = {startStepId, steps, answers: []};

export default Test;
