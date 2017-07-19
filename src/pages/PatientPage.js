import React from 'react';

import MedicalRecords from '../components/MedicalRecords';


//import './page_styles/LoginPage.css';

class PatientPage extends React.Component {
    render () {
        return (

 <div className="tile is-ancestor">
  <div className="tile is-vertical is-5">
    <div className="tile">
      <div className="tile is-parent is-vertical">
       <MedicalRecords/>
        <article  id='search-bar'className="tile is-child notification">
                    
        </article>
      </div>
    </div>
    </div>
</div>
      
        );
    }
}

export default PatientPage;

