import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import testData from './test_data';

const { results, recomendations } = testData;

class TestResult extends React.Component {

	constructor(props) {
		super(props);
		const anwsIds = _.map(props.testAnswers, 'id');
		this.state = {
			lowResult: _.find(results, r => {
				return !_.isEmpty(_.intersection(r.bindings, anwsIds));
			}),
			recomendation: _.find(recomendations, r => {
				return _.some(r.bindings, bind => {
					return !_.isEmpty(_.intersection(bind, anwsIds));
				})
			}),

		};
	}

	render() {
		const styles = {
			paper: {
  			display: 'flex',
  			flexGrow: 1,
    		flexDirection: 'column',
    		padding: 40,
    		margin: 20,
			},
			recomendationContent: {
				display: 'flex',

			}
		}

		const Answer = (props) => {
			return <h1>{props.data}</h1>
		}

		const Recomendation = (props) => {
			return (
				<div>
					<h1>{props.data.label}</h1>
					<div style={styles.recomendationContent}>
						<img src={props.data.image}/>
						<div dangerouslySetInnerHTML={{__html: props.data.text}}/>
					</div>
				</div>
			)
		}
		
		var result = <Answer data={this.state.lowResult.data.label} />;
		return(
			<MuiThemeProvider>
				<div>
					<Paper zDepth={3} style={styles.paper} >
						{result}
					</Paper>

					<Paper zDepth={3} style={styles.paper} >
						<Recomendation data={this.state.recomendation.data} />
					</Paper>

					<Paper zDepth={3} style={styles.paper} >
						<h1> Форма обратной связи тут </h1>
					</Paper>

				</div>
			</MuiThemeProvider>
		)
	}
}

export default TestResult;