import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import Formsy from 'formsy-react';

import styles from './Subscribe.css';


class Subscribe extends React.Component {
	constructor(){
		super();
		this.state = { email: '', isEmailSend: false};
		this.sendEmail = this.sendEmail.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}

	handleEmailChange (value) {
    this.setState({email: value});
  };

	sendEmail () {
		const email = this.state.email;
		Promise.resolve(this.props.action(email)).then( resp => {
			this.setState({isEmailSend: true});
		});
	}

	render () {
		let { btnLabel, inputPlaceholder, title, successTitle} = this.props;
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
					<Formsy.Form onValidSubmit={this.sendEmail} className={styles.subscribe_input_container}>
						<Input className={styles.subscribe_input} type='email' required value={this.state.email} label={inputPlaceholder} onChange={this.handleEmailChange}/>
						<Button type="submit" className={styles.subscribe_button} label={btnLabel} primary raised />
					</Formsy.Form>
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
	action: React.PropTypes.func.isRequired,
}

Subscribe.defaultProps = {
	btnLabel: 'Подписаться',
	inputPlaceholder: 'Ваша электронная почта',
	successTitle: 'Спасибо! Все самое интересное вы&nbsp;узнаете первым!',
}


export default Subscribe;

