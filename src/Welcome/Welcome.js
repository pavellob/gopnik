import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from './Welcome.css';


class Welcome extends React.Component {
	render () {
		return (
			<div className={styles.main}>
				<MuiThemeProvider>
					<RaisedButton  className={styles.startBtn} label={this.props.label} primary={true} onClick={this.props.start}/>
				</MuiThemeProvider>
			</div>
		)
	}

}

export default Welcome

