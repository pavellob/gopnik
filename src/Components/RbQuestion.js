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
				<label className={styles.title}>{this.props.question}</label>
				<RBGroup returnResult={this.returnResult} {...this.props}/>
			</div>
		)	
	}
}

class RBGroup extends React.Component {
  render(){
  	console.log(styles);
  	const inputStyle = {color: 'rgba(0, 0, 0, 0.54)'};
  	let answers = this.props.answers.map( answer => {
			return <RadioButton key={answer.id} value={answer} label={answer.label} className={styles.control}/>
		});
    return (
      <RadioButtonGroup style={inputStyle} name="RbQuestionGroup" onChange={this.props.returnResult}>
			  {answers}
			</RadioButtonGroup>
    );
  }
}




export default RbQuestion;
