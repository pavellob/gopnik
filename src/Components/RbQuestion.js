import React from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';

import styles from './RbQuestion.css';

class RbQuestion extends React.Component {
	constructor() {
		super();
		this.returnResult = this.returnResult.bind(this);
		this.state = {result: null}
	}

	returnResult(val) {
		this.setState({result: val});
		this.props.setResult(val);
	};

	render() {
		let answers = this.props.answers.map( answer => {
			return <RadioButton className={styles.control} key={answer.id} value={answer} label={answer.label}/>
		});
		return (
			<div className={styles.container}>
				<label className={styles.title}>{this.props.question}</label>
				<RadioGroup className={styles.control} value={this.state.result} name="RbQuestionGroup" onChange={this.returnResult}>
			  	{answers}
				</RadioGroup>
			</div>
		)	
	}
}

export default RbQuestion;
