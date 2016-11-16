import React from 'react';
import _ from 'lodash';

import DkComponents from './widgets/DkComponents'
import Step from './Step';

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
  	let TestStep = DkComponents[blockName];
    return (
    	<div>
    		<Step>
	    		<TestStep {...step.data}/>
	    	</Step>
	    </div>
    )
  }
}

const { startStepId, steps } = testData;

App.defaultProps = {startStepId, steps};



export default App
