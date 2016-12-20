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
				<p>Если вы работаете в торговле, то уже слышали о новых правилах 54-ФЗ.</p>
				<p>
					С 2017 года предприятия начинают передавать данные о продажах в ФНС.<br/>
					Для этого нужна онлайн-касса и договор с оператором фискальных данных.<br/> 
					Но, может быть, у вас есть отсрочка до 2018 года или вообще не нужно переходить?<br/>
				</p>
				<p>Ответьте на несколько вопросов, чтобы узнать наверняка:</p>
			</div>
		)	
	}

	componentDidMount() {
		this.props.resolve(this.state);
	}
}


StartScreen.defaultProps = {needAnswer: false};


export default StartScreen;
