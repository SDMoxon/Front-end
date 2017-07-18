import React from 'react';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';
import WardSearch from '../components/WardSearch';
import PatientList from '../components/PatientList';
import './page_styles/UserPage.css';


// import './page_styles/UserPage.css'

class UserPage extends React.Component {
    render () {
        return (

                <div className="tile is-ancestor">
  <div className="tile is-vertical is-5">
    <div className="tile">
      <div className="tile is-parent is-vertical">
       <ProfileCard/>
        <article  id='search-bar'className="tile is-child notification">
                     <SearchBar/> 
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article id='date'className="tile is-child notification">
        <p >Thursday 7th July 2020      14:32</p>
        <div className="content">
        </div>
      </article>
    </div>
  </div>
  <div id='wardSearch'className="tile is-parent">
    <article className="tile is-child notification">

          <p>Wards:</p>
            <WardSearch/>


    </article>
  </div>
  <div  id='patientList' className="tile is-parent">
    <article className="tile is-child notification">
      <div className="content">
          <p>Patient list:</p>
            <PatientList/>
        </div>
    </article>
  </div>
</div>
      
        );
    }
}

export default UserPage;

