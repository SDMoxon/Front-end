import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import PatientRecord from './PatientRecord';
import MedicalHistory from './MedicalHistory';
import './component_styles/MedicalRecords.css';


const styles = {
  tabs: {
    width: '400px',
    dispay: 'inline-block',
    marginRight: '30px',
    verticalAlign: 'top'
  },
  links: {
    margin: 0,
    padding: 0
  },
  tabLink: {
    height: '30px',
    lineHeight: '30px',
    padding: '0 15px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    display: 'inline-block'
  },
  activeLinkStyle: {
    borderBottom: '2px solid #333'
  },
  visableTabStyle: {
    display: 'inline-block'
  },
  content: {
    padding: '15px 15px'
  }
};

class MedicalRecords extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
  }

  render () {
    return (
      <div className="component-medical-MedicalRecords card" >
        <Tabs
          activeLinkStyle={styles.activeLinkStyle}
          style={styles.tabs}
        >
          <div style={styles.links}>
            <TabLink to="patient-records" style={styles.tabLink}>
              Patient Records
              </TabLink>
            <TabLink to="medical-history" style={styles.tabLink}>
              Medical History
              </TabLink>
            <TabLink to="minimize" style={styles.tabLink}>
              minimize
              </TabLink>
          </div>
          <div className="card-content" style={styles.content}>
            <TabContent for="patient-records">
              <PatientRecord />
            </TabContent>
            <TabContent for="medical-history">
              <MedicalHistory />
            </TabContent>
            <TabContent for="minimize">
            </TabContent>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default MedicalRecords;


