import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import DkComponents from './widgets/DkComponents'
import Step from './Step';
import testData from './test_data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const { startStepId, steps } = testData;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.goToNextStep = this.goToNextStep.bind(this);
		this.state = {
			stepId: this.props.startStepId,
			answers: []
		}
	}

	goToNextStep(nextStepId, answer) {
		this.state.answers.push(answer);
		this.setState({stepId: nextStepId});
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

App.defaultProps = {startStepId, steps};


const ThemedApp = () => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
)

export default ThemedApp
