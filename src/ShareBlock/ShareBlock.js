import React from 'react';

import {FontIcon} from 'react-toolbox/lib/font_icon';

import styles from './ShareBlock.css';

class ShareBlock extends React.Component {
	constructor() {
		super();
	}

	shareVK() {
		let url = 'http://vk.com/share.php';
		url += '?url=' + encodeURIComponent(this.props.sharedUrl);
		url += '&title=' + encodeURIComponent(this.props.label);
		url += '&description=' + encodeURIComponent(this.props.description);
		url += '&image=' + encodeURIComponent(this.props.sharedImageUrl);
		url += '&noparse=true';
		return url;
	}

	shareFB (){
		let url = 'https://www.facebook.com/dialog/feed?app_id=1031167230307124';
    url += '&link='+ encodeURIComponent(this.props.sharedUrl);
    url += '&picture=' + encodeURIComponent(this.props.sharedImageUrl);
    url += '&caption='+ encodeURIComponent(this.props.label);
    url += '&description='+ encodeURIComponent(this.props.description);
    return url;
	}

	shareOK () {
		let url = 'https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st._aid=ExternalShareWidget_SharePreview';
		url += '&st.imageUrl=' + encodeURIComponent(this.props.sharedImageUrl);
		url += '&st.description=' + encodeURIComponent(this.props.description);
		url += '&st.sharedUrl=' + encodeURIComponent(this.props.sharedUrl);
		url += '&st.title=' + encodeURIComponent(this.props.label);
		return url;
	}

	render() {
		let Shares = this.props.shares.map( (share)=> {
			const imgSrc = `assets/images/${share}.svg`;	
			const fnName = `share${share.toUpperCase()}`;
			let fn = this[fnName];
			if (typeof fn === 'function') {
				const shareUrl = fn.bind(this)();
				return <a className={styles.icon} key={share} target="_blank" href={shareUrl}><img src={imgSrc} /></a>
			}
			return '';
		})
		return (
			<div className={styles.share_block}>
				<span className={styles.share}><FontIcon className={styles.share_icon} value='share'/>Поделиться</span>
				<div className={styles.social_shares}>
					{Shares} 	
				</div>
			</div>
		)
	}
}

ShareBlock.propTypes = {
	sharedUrl: React.PropTypes.string.isRequired,
	sharedImageUrl: React.PropTypes.string.isRequired,
	label: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired,
	shares: React.PropTypes.arrayOf(React.PropTypes.oneOf(['vk', 'fb', 'ok'])),
	root: React.PropTypes.string,
}

ShareBlock.defaultProps = {
	root: location.protocol + "//" + location.host,
	shares : ['vk', 'fb', 'ok']
}

export default ShareBlock;