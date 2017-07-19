import React from 'react';

// import './component_styles/ProfileCard.css';

class VitalsDisplay extends React.Component {
	render () {
		return (
			<div className="component-VitalsDisplay panel columns">
				<div className="column">
					<img
						className='image'
						src="https://us.123rf.com/450wm/jcdesign/jcdesign1108/jcdesign110800005/10264326-healthy-heart-beat-on-monitor-screen-medical-illustration.jpg?ver=6"
						alt="heart rate moitor"
						height="100"
						width="200" />
					<h4>Heart Rate</h4>
					<img
						className='image'
						src="https://lh4.ggpht.com/9RO4dUgbzMpt2gU4b4lN0tHxpxUkphsl5hdlARZ42xx18Ob1vsKOtJGVyIjfYnn8iA=w300"
						alt="heart rate moitor"
						height="100"
						width="200" />
					<h4>Respiritory Rate</h4>
				</div>
				<div className="column">
					<img
						className='image'
						src="http://www.bloodpressureatwatch.com/wp-content/uploads/2014/11/Wrist-Blood-Pressure-Monitor-with-Heart-Health-and-Hypertension-Indicator-Pulse-Rate-and-Large-LCD-Display-with-LED-Backlight-0-0.jpg"
						alt="heart rate moitor"
						height="100"
						width="200" />
					<h4>Blood Pressure</h4>
					<img
						className='image'
						src="https://us.123rf.com/450wm/wisaanu99/wisaanu991505/wisaanu99150500089/40294107-thermometer-cool-winter-temperature-vector-illustration.jpg?ver=6"
						alt="heart rate moitor"
						height="100"
						width="200" />
					<h4>Temperature</h4>
				</div>
			</div>
		);
	}
}

export default VitalsDisplay;
