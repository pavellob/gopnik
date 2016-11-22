import React from 'react';
import _ from 'lodash';




let StepMixin = InnerComponent => class extends React.Component {
 constructor(props){
		super(props);
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
		const styles = {
			children: {
				flexGrow: 1,
			}
		}
		return (
			<InnerComponent style={styles.children} {...this.state} {...this.props} setResult={this.setResult}/>
		)
	}
  componentDidMount(){
    console.log('mounted')
  }
}


export default StepMixin;


