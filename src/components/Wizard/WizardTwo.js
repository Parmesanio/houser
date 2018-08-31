import React from 'react';
import { Link } from 'react-router-dom';
import { connect }from 'react-redux';
import { getUrl } from '../../redux/reducer';


const WizardTwo = (props) => {
    let { home_url } = props;
    return ( 
        <div>
            <form>
                <label>Image URL</label>
                <input type='text' value={home_url} />
            </form>
            <Link to='/wizard'>Previous</Link>
            <Link to='/wizard/step-3'>Next</Link>
        
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