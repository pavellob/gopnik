import React from 'react';
import {Button} from 'react-toolbox/lib/button';

import styles from './Welcome.css';


class Welcome extends React.Component {
	render () {
		return (
			<div className={styles.main}>
				<Button className={styles.startBtn} label={this.props.label} onClick={this.props.start} raised primary />
			</div>
		)
	}

}

export default Welcome

