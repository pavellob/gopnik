import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LawResult extends React.Component {

	render() {

		const Answer = (props) => {
			return <h1>{props.data}</h1>
		}
		
		var result = <Answer data={this.props.label} />;
		return(
			<MuiThemeProvider>
				<Paper zDepth={3}>
					{result}
				</Paper>
			</MuiThemeProvider>
		)
	}
}

export default LawResult;