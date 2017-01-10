import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';


import styles from './Subscribe.css';


class Subscribe extends React.Component {
	constructor(){
		super();
		this.state = { email: '', isEmailSend: false};
		this.sendEmail = this.sendEmail.bind(this);
	}

	sendEmail () {
		/*fetch('/api/testresults/', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(req)
		}).then(()=> {
			this.state.isEmailSend = true;
		});*/
		this.setState({isEmailSend: true});
	
	}

	render () {

		let { btnLabel, inputPlaceholder, title, successTitle} = this.props;
		title = unescape(title);
		if(this.state.isEmailSend) {
			return (
				<div className={styles.subscribe_container}>
					<span className={styles.subscribe_title}>
						<div dangerouslySetInnerHTML={{__html: successTitle}} />
					</span>
				</div>
			)
		} else {
			return (
				<div className={styles.subscribe_container}>
					<span className={styles.subscribe_title}> 
						<div dangerouslySetInnerHTML={{__html: title}} />
					</span>
					<div className={styles.subscribe_input_container}>
						<Input className={styles.subscribe_input} type='email' value={this.state.email} label={inputPlaceholder} />
						<Button className={styles.subscribe_button} label={btnLabel} primary raised onClick={this.sendEmail} />
					</div>
				</div>
			)
		}
	}
}

Subscribe.propTypes = {
	title: React.PropTypes.string.isRequired,
	btnLabel: React.PropTypes.string.isRequired,
	inputPlaceholder: React.PropTypes.string.isRequired,
	successTitle: React.PropTypes.string.isRequired,
}

Subscribe.defaultProps = {
	btnLabel: 'Подписаться',
	inputPlaceholder: 'Ваша электронная почта',
	successTitle: 'Спасибо! Все самое интересное вы&nbsp;узнаете первым!',
}


export default Subscribe;

