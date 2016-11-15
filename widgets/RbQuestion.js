import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class RbQuestion extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = {result: null}
	}

	update(e, val) {
		console.log(val);
		this.setState({result: val});
	};

	render() {
		return (
			<div>
				<h1>{this.props.question}</h1>
				<RBGroup update={this.update} {...this.props}/>
			</div>
		)	
	}
}

class RBGroup extends React.Component {
  render(){
  	let answers = this.props.answers.map( answer => {
			return <RadioButton key={answer.id} value={answer.id} label={answer.label}/>
		});
    return (
      <RadioButtonGroup name="RbQuestionGroup" onChange={this.props.update}>
			  {answers}
			</RadioButtonGroup>
    );
  }
}


export default RbQuestion;
