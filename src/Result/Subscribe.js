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
		if(this.state.isEmailSend) {
			return (
				<div className={styles.subscribe_container}>
					<span className={styles.subscribe_title}>
						Спасибо! Все самое интересное вы&nbsp;узнаете первым!
					</span>
				</div>
			)
		} else {
			return (
				<div className={styles.subscribe_container}>
					<span className={styles.subscribe_title}> 
						Подпишитесь на&nbsp;рассылку, чтобы первым узнавать о&nbsp;скидках и&nbsp;акциях
					</span>
					<div className={styles.subscribe_input_container}>
						<Input className={styles.subscribe_input} type='email' value={this.state.email} label='Ваша электронная почта' />
						<Button className={styles.subscribe_button} label="Подписаться" primary raised onClick={this.sendEmail}/>
					</div>
				</div>
			)
		}
	}

}

export default Subscribe;

