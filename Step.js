import React from 'react';
import _ from 'lodash';




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
		const styles = {
			children: {
				flexGrow: 1,
			},
			img: {
				height: 500,
				width: 'auto',
			}
		}
		return (
			<div>
				<img src={this.props.image} style={styles.img} />
				<InnerComponent style={styles.children} {...this.state} {..._.omit(this.props, 'style')} setResult={this.setResult}/>
			</div>
		)
	}
  componentDidMount(){
    console.log('mounted')
  }
}


export default StepMixin;


