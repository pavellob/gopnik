import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import {FontIcon} from 'react-toolbox/lib/font_icon';


import styles from './MainResult.css';


class MainResult extends React.Component {
	constructor(){
		super();
		this.root = location.protocol + '//' + location.host;
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
								<span className={styles.share}><FontIcon value='share'/>Поделиться</span>
								<div className={styles.social_shares}>
									<a className={styles.icon} target="_blank" href="https://vk.com/dreamkas" ><img src="static/assets/images/vk.svg" /></a>
									<a className={styles.icon} target="_blank" href="https://www.facebook.com/DreamkasRussia"><img src="static/assets/images/fb.svg"  /></a>
									<a className={styles.icon} target="_blank" href="https://www.facebook.com/DreamkasRussia"><img src="static/assets/images/oki.svg"  /></a>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>	
		)
	}
}

export default MainResult;