import React from 'react';

import './component_styles/ProfileCard.css';

class ProfileCard extends React.Component {
    render () {
        return (
            <div className="component-ProfileCard">
                <div className="profile-photo-container">
                <img id='profile-photo' src="http://www.dottorelondon.com/wp-content/themes/dottorelondon/img/doctor1.png" alt="profile photo"/>
                </div>
                <div className="users-details">
                <h2>Users Name</h2>
                <h4>Position: Doctor</h4>
                <h4>Registered At: St Marys Hospital</h4>
                </div>
            </div>
        );
    }
}

export default ProfileCard;

