import React from 'react';
import _ from 'lodash';


import styles from './Step.css';




let StepMixin = InnerComponent => class extends React.Component {
 constructor(props){
		super(props);
		////console.log('step props:', props);
	}

	render() {
		const inner = <InnerComponent {...this.props} resolve={this.props.resolveStep}/>;
		return (
			<div className={styles.content}>
				{inner}
			</div>
		)
	}
  componentDidMount(){
    //console.log('step mounted');
  }
}

export default StepMixin;


