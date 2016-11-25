import React from 'react';

import testData from './test_data';

const { results } = testData;

class TestResult extends React.Component {

	constructor(props) {
		super(props);
		const anwsIds = _.map(props.testAnswers, 'id');
		this.state = {testResult: _.find(results, r => {
			return !_.isEmpty(_.intersection(r.bindings, anwsIds));
			
		})};
	}

	render() {
		console.log(results);
		const Answer = (props) => {
			return <h1>{props.data}</h1>
		}
		console.log(this.props.testAnswers);
		var result = <Answer data={this.state.testResult.data.label} />;
		return(
			<div>
				{result}
			</div>
		)
	}
}

export default TestResult;