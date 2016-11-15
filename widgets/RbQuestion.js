import React from 'react';

class RbQuestion extends React.Component {
	render() {
		let answers = this.props.answers.map( answer => {
			return <li key={answer.id}>{answer.label}</li>
		});
		return (
			<div>
				<h1>{this.props.question}</h1>
				<ul>
					{answers}
				</ul>
			</div>
		)	
	}
}

export default RbQuestion;
