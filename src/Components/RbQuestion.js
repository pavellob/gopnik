import React from 'react';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';

import styles from './RbQuestion.css';

class RbQuestion extends React.Component {
	constructor(props) {
		super(props);
		//console.log(props);
		this.complete = this.complete.bind(this);
		this.state = {
			answer: null,
			isComplete : !this.props.needAnswer
		};
		
	}

	complete(val) {
		const newState = {answer: val, isComplete: true};
		this.setState(newState);
		this.props.resolve(newState);
	};

	render() {
		let answers = this.props.answers.map( answer => {
			return <RadioButton className={styles.control} key={answer.id} value={answer} label={answer.label}/>
		});
		return (
			<div className={styles.container}>
				<label className={styles.title}>{this.props.question}</label>
				<RadioGroup className={styles.control} value={this.state.answer} name="RbQuestionGroup" onChange={this.complete}>
			  	{answers}
				</RadioGroup>
			</div>
		)	
	}

	componentDidMount() {
		this.props.resolve(this.state);
	}
}

RbQuestion.defaultProps = {needAnswer: true};

export default RbQuestion;
