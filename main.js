import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';

injectTapEventPlugin();

const styles = {
	app: {
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
	},
}


ReactDOM.render(<App style={styles.app}/>, document.getElementById('app'))
