import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	paper: {
		padding: 16,
		maxWidth: 500
	},
	actions: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
}

class Step extends React.Component {
	constructor(props){
		super(props);
		this.next = this.next.bind(this);
		this.setResult = this.setResult.bind(this);
		this.state = {
			result: null
		}
	}

	setResult(result) {
		console.log("Дальше идем на шаг", result.nextStepId || this.props.children.props.nextStepId);
	}

	next(nextStepId) {
		console.log("NEXT");
		console.log(this);
	}

	back() {
		console.log("FUCK");
	}

	render() {
		const childrenWithSetResult = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {setResult: this.setResult});
		});
		return (
			<Paper zDepth={3} style={styles.paper} >
				{childrenWithSetResult}
				<div style={styles.actions}>
					<FlatButton label="Назад" primary={true} />
					<RaisedButton label="Дальше" primary={true} onClick={this.next}/>
				</div>
			</Paper>
		)
	}
}


export default Step;


