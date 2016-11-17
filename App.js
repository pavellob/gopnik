import React from 'react';
import Test from './Test';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const ThemedApp = () => (
	<MuiThemeProvider>
		<Test />
	</MuiThemeProvider>
)

export default ThemedApp
