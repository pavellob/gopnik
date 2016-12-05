import React from 'react';
import _ from 'lodash';

import styles from './Step.css';




let StepMixin = InnerComponent => class extends React.Component {
 constructor(props){
		super(props);
		console.log(props);
		this.setResult = this.setResult.bind(this);
		this.state = {
			//result: null,
			nextStepId: -1
		}
	}
  setResult(result) {
		const nextStepId = result.nextStepId || this.props.nextStepId;
		console.log("Ответ:", result, "; Дальше идем на шаг", nextStepId);
		this.props.setNextStep(nextStepId, result);
	}

	render() {
		return (
			<div className={styles.step}>
				<img src={this.props.image} className={styles.img} />
				<div className={styles.content}>
					<InnerComponent {...this.state} {..._.omit(this.props, 'style')} setResult={this.setResult}/>
				</div>
			</div>
		)
	}
  componentDidMount(){
    console.log('step mounted')
  }
}


export default StepMixin;


