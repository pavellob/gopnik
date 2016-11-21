import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Test from './Test';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
	
	mount(){
		console.log('mount test');
    ReactDOM.render(<Test finish={this.unmount.bind(this)}/>, document.getElementById('test'))
  }

  unmount(){
		console.log('unmount');
    ReactDOM.unmountComponentAtNode(document.getElementById('test'))
	}

	render() {
		const styles = {
  		startScreen: {
  			display: 'flex',
  			flexGrow: 1,
  			justifyContent: 'center',
  			flexDirection: 'column',
  		},
  		startBtn: {
  			justifyContent: 'center',
  			alignItems: 'center'
  			
  		}
  	}
		return (
			<MuiThemeProvider>
				<div style={styles.startScreen}>
					<RaisedButton label="Начать" primary={true} onClick={this.mount.bind(this)} style={styles.startBtn}/>
					<div id="test"> </div>
				</div>
			</MuiThemeProvider>
		)
	}
}
App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};
export default App

