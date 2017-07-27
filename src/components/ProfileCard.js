import React from 'react';

import './component_styles/ProfileCard.css';

class ProfileCard extends React.Component {
	render () {
		return (
			<div className="component-ProfileCard card">
					<img id='staff-image' src="https://drparivar.com/images/doctor-profile-pic.png" />
					<div className='staffinfo'>
					<p id='doctorsName'>Katie Johnson</p>
					<p ><span className='staff-key'>Position:</span> <span className='profileCardInfo'>Doctor</span></p>
					<p ><span className='staff-key'>Registered At:</span> <span className='profileCardInfo'>St Marys Hospital</span></p>
					<p ><span className='staff-key'>Pager Number:</span> <span className='profileCardInfo'>609-412</span></p>
					<p ><span className='staff-key'>Registration Number:</span> <span className='profileCardInfo'>GP782664382</span></p>
					</div>
			</div>
		);
	}
}

export default ProfileCard;


