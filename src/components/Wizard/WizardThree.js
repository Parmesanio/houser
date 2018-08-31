import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const WizardThree = () => {
    let { home_name, address, city, home_state, zipcode } = this.props;
    return ( 
        <div>Step 3
            <Link to='/wizard/step-2'>Previous</Link>
             <button onClick={() => this.handlePost(home_name, address, city, home_state, zipcode)}>Complete</button>
        </div>
     );
}
 
export default connect()(withRouter(WizardThree));