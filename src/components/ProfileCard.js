import React from 'react';

import './component_styles/ProfileCard.css';

class ProfileCard extends React.Component {
    render () {
        return (
            <div className="component-ProfileCard">
 
  <article className="tile is-child notification is-primary">
             <img id='profile-photo'src="https://drparivar.com/images/doctor-profile-pic.png"/>
            <p className="title">John Smith</p>
            <p className="subtitle">Position: Doctor</p>
        </article>
</div>
        );
    }
}

export default ProfileCard;


