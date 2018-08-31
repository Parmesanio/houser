import React from 'react';
import { Link } from 'react-router-dom';
import { connect }from 'react-redux';
import { getUrl } from '../../redux/reducer';


const WizardTwo = (props) => {
    let { home_url, getUrl } = props;
    return ( 
        <div className="dashboard">
            <div className="header">
                    <h1>Add New Listing</h1>
                    <Link id="cancel"  to='/'>Cancel</Link>
                </div>
            <form className='step wizard2'>
            <div className="moreDetails">
                <label>Image URL</label>
                <input type='text' onChange={(event) => getUrl(event.target.value)} value={home_url} />
                </div>
                <Link className='previous' to='/wizard'>Previous</Link>
                <Link className='next' to='/wizard/step-3'>Next</Link>
            </form>
        
        </div>
     );
}

const mapStateToProps = state => {
    let { home_url } = state;
    return {
        home_url
    }
}
 
export default connect(mapStateToProps, {getUrl})(WizardTwo);