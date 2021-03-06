import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMortgage, getRent } from '../../redux/reducer';
import axios from 'axios';

const WizardThree = (props) => {
    function handlePost(home_name, address, city, home_state, zip, home_url, mortgage, rent) {
        axios.post('/api/homes', {home_name, address, city, home_state, zip, home_url, mortgage, rent})
            .then(() => props.history.push('/'))
            .catch(err => console.log('Err in axios.post', err));
    }
    function onSubmit(event) {
        event.preventDefault();
    }

    let { getMortgage, getRent, home_name, address, city, home_state, zipcode, mortgage, rent, home_url } = props;
    return ( 
        <div className="dashboard">
            <div className="header">
                    <h1>Add New Listing</h1>
                    <Link id="cancel"  to='/'>Cancel</Link>
                </div>
            <form className="step wizard3" onSubmit={(event) => onSubmit(event)}>
            <h4>Recommended Rent: ${rent * 1.25}</h4>
            <div className="moreDetails">
                <label>Monthly Mortgage Amount</label>
                <input type='number' onChange={(event) => getMortgage(event.target.value)} />
                <label>Desired Monthly Rent</label>
                <input type='number' onChange={(event) => getRent(event.target.value)} />
                </div>
                <Link className="previous" to='/wizard/step-2'>Previous</Link>
                <button className="next" onClick={() => handlePost(home_name, address, city, home_state, zipcode, home_url, mortgage, rent)}>Complete</button>
            </form>
        </div>
     );
}

const mapStateToProps = state => {
    let { home_name, address, city, home_state, zipcode, home_url, mortgage, rent } = state;
    return {
        home_name, address, city, home_state, zipcode, home_url, mortgage, rent

    }
}

 
export default connect(mapStateToProps, {getMortgage, getRent})(withRouter(WizardThree));