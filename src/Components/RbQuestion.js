import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import styles from './RbQuestion.css';

class RbQuestion extends React.Component {
	constructor() {
		super();
		this.returnResult = this.returnResult.bind(this);
		this.state = {result: null}
	}

	returnResult(e, val) {
		this.setState({result: val});
		this.props.setResult(val);
	};

	render() {
		return (
			<div className={styles.container}>
				<h2 className={styles.title}>{this.props.question}</h2>
				<RBGroup returnResult={this.returnResult} {...this.props}/>
			</div>
		)	
	}
}

class RBGroup extends React.Component {
  render(){
  	let answers = this.props.answers.map( answer => {
			return <RadioButton key={answer.id} value={answer} label={answer.label}/>
		});
    return (
      <RadioButtonGroup name="RbQuestionGroup" onChange={this.props.returnResult}>
			  {answers}
			</RadioButtonGroup>
    );
  }
}




export default RbQuestion;
