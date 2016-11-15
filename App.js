import React from 'react';
import _ from 'lodash';

import DkComponents from './widgets/DkComponents'
import testData from './test_data';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stepId: this.props.startStepId
		}
	}
  render(){
  	const step = _.find(this.props.steps, {id: this.state.stepId});
  	const blockName = _.result(step, 'block');
  	let Step = DkComponents[blockName];
    return (
    	<div>
	    	<div>{this.state.stepId}</div>
	    	<Step {...step.data}/>
	    </div>
    )
  }
}

const { startStepId, steps } = testData;

App.defaultProps = {startStepId, steps};

export default App
