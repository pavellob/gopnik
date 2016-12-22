import React from 'react';
import { Card } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';


import styles from './MainResult.css';


class MainResult extends React.Component {

	render() {
		const actions = () => {
			return (<div className={styles.actions}> 
					<Button label="Подробнее" primary />
					<Button label="Заказать" primary raised/>
				</div>
			)
		}

		const hints = () => {
			if(!_.isEmpty(this.props.hints)){
				const hts = _.map(this.props.hints, (hint, $index) => {
					return (<li key={$index}>{hint}</li>)
				})
				return (<div className={styles.main_hints}><ul>{hts}</ul></div>)
			}
		}
		const lawHint = this.props.lawResult.hint ? <p className={styles.law_hint}>{this.props.lawResult.hint}</p> : null;

		return(
			<div className={styles.main_container}>
	    	<div className={styles.top_block}>
					<div className={styles.top_container}>
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
								<div className={styles.recomendation_text} dangerouslySetInnerHTML={{__html: this.props.recomendation.text}}/>
								<div className={styles.recomendation_img} >
									<img src={this.props.recomendation.image}/>
								</div>
								{actions()}
							</div>
							<div className={styles.hints}>
								{hints()}
								{lawHint}
							</div>
						</Card>
					</div>
				</div>
			</div>	
		)
	}
}

export default MainResult;