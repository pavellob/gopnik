import React from 'react';
import ReactDOM from 'react-dom';

import RaisedButton from 'material-ui/RaisedButton';

import Test from './Test';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
	
	mount(){
		console.log(ReactDOM.findDOMNode(this));
		ReactDOM.render(<Test finish={this.unmount.bind(this)}/>, document.getElementById('root'))
  }

  unmount(){
		console.log('unmount');
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    ReactDOM.render(<Welcome  label="Начать"  start={this.mount.bind(this)}/>, document.getElementById('root'))
	}

	render() {
		const styles = {
  		startScreen: {
  			height: 'inherit',
  		}
  	}
		return (
			<div id="root" style={styles.startScreen}> </div>
		)

	}
	componentDidMount(){
    console.log('mounted')
    ReactDOM.render(<Welcome  label="Начать"  style="alignItems: 'center'" start={this.mount.bind(this)}/>, document.getElementById('root'))

  }
}

class Welcome extends React.Component {
	render () {
		const styles = {
  		startBtn: {
  			display: 'flex',
  			flexGrow: 1,
  			justifyContent: 'center',
  			alignItems: 'center',
  			flexDirection: 'column',
  			height: 'inherit',
  		}
  	}
		return (
			<MuiThemeProvider>
				<div style={styles.startBtn}>
					<RaisedButton  label={this.props.label} primary={true} onClick={this.props.start}/>
				</div>
			</MuiThemeProvider>
		)
	}

}

export default App

