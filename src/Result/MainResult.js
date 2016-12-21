import React from 'react';
import { Card } from 'react-toolbox/lib/card';

import styles from './MainResult.css';


class MainResult extends React.Component {

	render() {
		const Answer = (props) => {
			return <h1>{props.data}</h1>
		}
		var result = <Answer data={this.props.lawResult.label} />;
		const recomendation = (<div>
				<h1>{this.props.recomendation.label}</h1>
				<div>
					<img src={this.props.recomendation.image}/>
					<div dangerouslySetInnerHTML={{__html: this.props.recomendation.text}}/>
				</div>
			</div>
		);
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
							{result}
							{recomendation}
						</Card>
					</div>
				</div>
			</div>	
		)
	}
}

export default MainResult;