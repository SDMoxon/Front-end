import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SearchBar from '../components/SearchBar';

import './page_styles/MasterPage.css';

class MasterPage extends React.Component {
    render () {
        return (
            <div className="compontent-MasterPage">
                <div id='top-bar-container' className="columns">
                    <div className="column">
                        <div id='top-bar' className="row">
                            <Link to='/user/:userid'><img id='nav-profile-photo' src="https://drparivar.com/images/doctor-profile-pic.png" /></Link>
                            <div id='nav-staff-title'>
                                <p>Dr Katie Johnson</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="nav-search column">
                    <SearchBar/>
                    </div>
                </div>
                <div className="columns">
                    <div id='main-space' className="column is-12">
                        {this.props.children}
                    </div>

                </div>
            </div>

        );
    }
}

export default MasterPage;


