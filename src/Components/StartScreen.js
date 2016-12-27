import React from 'react';

import styles from './StartScreen.css';

class StartScreen extends React.Component {
	constructor(props) {
		super(props);
		//console.log('props is: ', props);
		this.state = {isComplete: !props.needAnswer}
	}

	componentWillUnmount(){
		//console.log('I am unmount and my state is: ', this.state);
	}
	render() {
		return (
			<div className={styles.container}>
				<label className={styles.title}>Кто и когда переходит на новый порядок применения ККТ?</label>
				<p className={styles.importantText}>Если вы работаете в торговле, то уже слышали о новых правилах 54-ФЗ, онлайн-кассах и ОФД</p>
				<p className={styles.text}>
					<p>Если не слышали, то вот: с 2017 года предприятия торговли и услуг начинают передавать данные о продажах в ФНС. Для этого понадобится онлайн-касса и договор с оператором фискальных данных.</p>
					<p>Правда, некоторые категории предпринимателей могут не пользоваться кассами. А некоторые переходят только в 2018 году.</p>
					<p>Пройдите наш тест и узнайте, нужна ли вам касса.</p>
				</p>
				<p className={styles.importantText}>Ответьте на несколько вопросов, чтобы узнать наверняка:</p>
			</div>
		)	
	}

	componentDidMount() {
		this.props.resolve(this.state);
	}
}


StartScreen.defaultProps = {needAnswer: false};


export default StartScreen;
