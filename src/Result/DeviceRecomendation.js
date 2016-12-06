import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DeviceRecomendation extends React.Component {

	render() {
		return(
			<MuiThemeProvider>
				<Paper zDepth={3}>
					<div>
						<h1>{this.props.label}</h1>
						<div>
							<img src={this.props.image}/>
							<div dangerouslySetInnerHTML={{__html: this.props.text}}/>
						</div>
					</div>
				</Paper>
			</MuiThemeProvider>
		)
	}
}

export default DeviceRecomendation;