import React from 'react';

class StaticText extends React.Component {

	render() {
		const styles = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}
		return (
			<div style={styles}>
				{ this.props.label ? <h1>{this.props.label}</h1> : false }
				{ this.props.text ? <p>{this.props.text}</p> : false }
			</div>
		)	
	}
}


export default StaticText;
