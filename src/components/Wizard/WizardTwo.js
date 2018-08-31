import React from 'react';
import { Link } from 'react-router-dom';

const WizardTwo = () => {
    return ( 
        <div>Step 2
            <Link to='/wizard'>Previous</Link>
            <Link to='/wizard/step-3'>Next</Link>

        </div>
     );
}
 
export default WizardTwo;