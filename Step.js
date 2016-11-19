import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class Step extends React.Component {
	constructor(props){
		super(props);
		this.next = this.next.bind(this);
		this.setResult = this.setResult.bind(this);
		this.state = {
			result: null,
			nextStepId: -1
		}
	}

	setResult(result) {
		const nextStepId = result.nextStepId || this.props.children.props.nextStepId;
		console.log("Ответ:", result, "; Дальше идем на шаг", nextStepId);
		this.setState({
			nextStepId: nextStepId,
			result
		});
	}

	next() {
		this.props.goToNextStep(this.state.nextStepId, this.state.result);
	}

	back() {
		console.log(this.props.background);
	}

	render() {
		const styles = {
			paper: {
				position: 'relative',
    		padding: 40,
    		margin: 40,
    		minHeight: 600,
    		display: 'flex',
    		flexDirection: 'column',
				backgroundImage: this.props.children.props.background,
				backgroundPosition: 'center',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat'
			},
			children: {
				flexGrow: 1,
			},
			actions: {
				display: 'flex',
				justifyContent: 'flex-end'
			}
		}
		const childrenWithSetResult = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {setResult: this.setResult});
		});
		return (
			<Paper zDepth={3} style={styles.paper} >
				<div style={styles.children}>
					{childrenWithSetResult}
				</div>
				<div style={styles.actions}>
					<FlatButton label="Назад" primary={true} />
					<RaisedButton label="Дальше" primary={true} onClick={this.next}/>
				</div>
			</Paper>
		)
	}
}


export default Step;


