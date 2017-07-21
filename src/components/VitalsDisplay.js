import React from 'react';

import './component_styles/VitalsDisplay.css';

class VitalsDisplay extends React.Component {
	render () {
		return (
			<div className="component-VitalsDisplay">
				<div className="heartRate column has-text-centered">
					<h3 id='vitals-title'>Heart Rate</h3>
					<img id='heart-logo' src='https://cdn.shopify.com/s/files/1/0978/6902/files/heart_icon.svg?11762261372195868514'/>
				</div>
				<div className="heartRate column has-text-centered">
					<h3 id='vitals-title'>Blood Pressure</h3>
					<img id='heart-logo' src='https://d30y9cdsu7xlg0.cloudfront.net/png/26751-200.png'/>
				</div>
				<div className="heartRate column has-text-centered">
					<h3 id='vitals-title'>Temperature</h3>
					<img id='heart-logo' src='https://openclipart.org/image/2400px/svg_to_png/202633/1412206082.png'/>
				</div>
				<div className="heartRate column has-text-centered">
					<h3 id='vitals-title'>Respiritory Rate</h3>
					<img id='heart-logo' src='https://www.shareicon.net/download/2015/12/07/683504_medical.svg'/>
				</div>
				
			</div>
		);
	}
}

export default VitalsDisplay;