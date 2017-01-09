import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {FontIcon} from 'react-toolbox/lib/font_icon';
import { Input } from 'react-toolbox/lib/input';


import styles from './MainResult.css';


class MainResult extends React.Component {
	constructor(){
		super();
		this.root = location.protocol + '//' + location.host;
		this.state = { email: '', sendEmail: false};
		this.sendEmail = this.sendEmail.bind(this);
	}

	toProduct() {
		const to = this.root + this.props.recomendation.link;
		location = to + '?utm_source=dreamkas_ru&utm_medium=link&utm_campaign=test-54-fz';
	}

	bayProduct() {
		const to = this.root + this.props.recomendation.link + 'kupit';
		location = to + '?utm_source=dreamkas_ru&utm_medium=link&utm_campaign=test-54-fz';
	}

	goHome() {
		const root = location.protocol + '//' + location.host;
		location = root + '?utm_source=dreamkas_ru&utm_medium=link&utm_campaign=test-54-fz';
	}

	shareVK() {
		let url = 'http://vk.com/share.php';
		url += '?url=' + encodeURIComponent('https://dreamkas.ru/54fz/test/');
		url += '&title=' + encodeURIComponent(this.props.lawResult.label);
		url += '&description=' + encodeURIComponent('Пройди тест — узнай, нужна ли онлайн-касса тебе');
		url += '&image=' + encodeURIComponent(window.location + this.props.lawResult.shareImage);
		url += '&noparse=true';
		return url;
	}

	shareFB (){
		let url = 'https://www.facebook.com/dialog/feed?app_id=1031167230307124';
    url += '&link='+ encodeURIComponent('https://dreamkas.ru/54fz/test/');
    url += '&picture=' + encodeURIComponent(window.location + this.props.lawResult.shareImage);
    url += '&caption='+ encodeURIComponent(this.props.lawResult.label);
    url += '&description='+ encodeURIComponent('Пройди тест — узнай, нужна ли онлайн-касса тебе');
    return url;
	}

	shareOK () {
		let url = 'https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st._aid=ExternalShareWidget_SharePreview';
		url += '&st.imageUrl=' + encodeURIComponent(window.location + this.props.lawResult.shareImage);
		url += '&st.description=' + encodeURIComponent('Пройди тест — узнай, нужна ли онлайн-касса тебе');
		url += '&st.shareUrl=' + encodeURIComponent('https://dreamkas.ru/54fz/test/');
		url += '&st.title=' + encodeURIComponent(this.props.lawResult.label);
		return url;
	}

	sendEmail () {
		/*fetch('/api/testresults/', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(req)
		}).then(()=> {
			this.state.sendEmail = true;
		});*/
		this.setState({sendEmail: true});
	
	}

	render() {
		const actions = () => {
			return (<div className={styles.actions}> 
					<Button label="Заказать" primary raised onClick={this.bayProduct.bind(this)}/>
					<Button label="Подробнее" primary onClick={this.toProduct.bind(this)}/>
				</div>
			)
		}

		const hints = () => {
			if(!_.isEmpty(this.props.hints)){
				const hts = _.map(this.props.hints, (hint, $index) => {
					return (<p key={$index}>{hint}</p>)
				})
				return (<div className={styles.main_hints}>{hts}</div>)
			}
		}
		const lawHint = this.props.lawResult.hint ? <p className={styles.law_hint}>{this.props.lawResult.hint}</p> : null;

		const sendEmailBlock = () => {
			if(this.state.sendEmail) {
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

		return(
			<div className={styles.main_container}>
	    	<div className={styles.top_block}>
					<div className={styles.top_container}>
						<img src="static/assets/images/back.svg" className={styles.b_img} />
						<img src={this.props.lawResult.image} className={styles.img} />
					</div>
	    	</div>
				<div className={styles.card_block}>
					<div className={styles.card_container}>
						<Card>
							<div className={styles.header_block}>
								<label className={styles.card_title}>Результат</label>
								<label className={styles.law_result}>{this.props.lawResult.label}</label>
							</div>
							<div className={styles.law_text} dangerouslySetInnerHTML={{__html: this.props.lawResult.text}}/>
							<div className={styles.recomendation}>
								<div className={styles.recomendation_img} >
									<img src={this.props.recomendation.image}/>
								</div>
								<div className={styles.recomendation_content}>
									<div className={styles.recomendation_text} dangerouslySetInnerHTML={{__html: this.props.recomendation.text}}/>
									{hints()}
									{actions()}
								</div>
							</div>
							<div className={styles.share_block}>
								<span className={styles.share}><FontIcon className={styles.share_icon} value='share'/>Поделиться</span>
								<div className={styles.social_shares}>
									<a className={styles.icon} target="_blank" href={this.shareVK()}><img src="static/assets/images/vk.svg" /></a>
									<a className={styles.icon} target="_blank" href={this.shareFB()}><img src="static/assets/images/fb.svg"  /></a>
									<a className={styles.icon} target="_blank" href={this.shareOK()}><img src="static/assets/images/oki.svg"  /></a>
								</div>
							</div>
						</Card>
						<Card className={styles.subscribe_card}>
							{sendEmailBlock()}
						</Card>
					</div>
				</div>
			</div>	
		)
	}
}

export default MainResult;