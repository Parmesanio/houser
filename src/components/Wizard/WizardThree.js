import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const WizardThree = (props) => {
    function handlePost(home_name, address, city, home_state, zip) {
        axios.post('/api/homes', {home_name, address, city, home_state, zip})
            .then(() => this.props.history.push('/'))
            .catch(err => console.log('Err in axios.post', err));
    }
    function onSubmit(event) {
        event.preventDefault();
    }

    let { home_name, address, city, home_state, zipcode } = props;
    return ( 
        <div>Step 3
            <Link to='/wizard/step-2'>Previous</Link>
            <form onSubmit={(event) => this.onSubmit(event)}>

                <button onClick={() => handlePost(home_name, address, city, home_state, zipcode)}>Complete</button>
            </form>
        </div>
     );
}
 
export default connect()(withRouter(WizardThree));