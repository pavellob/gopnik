import React from 'react';
import _ from 'lodash';


import styles from './Step.css';




let StepMixin = InnerComponent => class extends React.Component {
 constructor(props){
		super(props);
		console.log(props);
		this.stepDone = this.stepDone.bind(this);
		this.state = {
			//result: null,
			nextStepId: -1
		}
	}

  stepDone(result) {
		console.log('stepDone');
		this.props.setNextStep(result);
	}

	render() {
		const inner = <InnerComponent {...this.state} {..._.omit(this.props, 'style')} nextStep={this.stepDone}/>;
		//this.props.needAnswer = inner.props.needAnswer;
		return (
			<div className={styles.content}>
				{inner}
			</div>
		)
	}
  componentDidMount(){
    console.log('step mounted');
  }
}

StepMixin.defaultProps = {needAnswer: false};



export default StepMixin;


