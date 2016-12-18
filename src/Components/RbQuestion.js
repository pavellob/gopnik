import React from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';

import styles from './RbQuestion.css';

class RbQuestion extends React.Component {
	constructor(props) {
		super(props);
		this.complete = this.complete.bind(this);
		this.state = {
			result: null,
			isComplete : !this.props.needAnswer
		};
		
	}

	complete(val) {
		this.setState({result: val, isComplete: true});
		this.props.nextStep(val);
	};

	render() {
		let answers = this.props.answers.map( answer => {
			return <RadioButton className={styles.control} key={answer.id} value={answer} label={answer.label}/>
		});
		return (
			<div className={styles.container}>
				<label className={styles.title}>{this.props.question}</label>
				<RadioGroup className={styles.control} value={this.state.result} name="RbQuestionGroup" onChange={this.complete}>
			  	{answers}
				</RadioGroup>
			</div>
		)	
	}
}

RbQuestion.defaultProps = {needAnswer: true};

export default RbQuestion;
