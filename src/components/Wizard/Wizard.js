import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getName, getAddress, getCity, getState, getZip } from '../../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './wizard.css';

class Wizard extends Component {
    render() { 
        let { getName, getAddress, getCity, getState, getZip, home_name, address, city, home_state, zipcode } = this.props;
        let { id } = this.props.match.params;
        return ( 
            <div>
                {id ?
                <div className="dashboard">
                    <div className="header">
                    <h1>Edit Listing</h1>
                    <Link to='/'>Cancel</Link>
                </div>
                    <form className='step1'>
                    <label>Property Name</label>
                    <input type="text" onChange={(event) => getName(event.target.value)} value={home_name} />
                    <label>Address</label>
                    <input type="text" onChange={(event) => getAddress(event.target.value)} value={address} />
                    <div className="moreDetails">
                    <label>City</label>
                    <input type="text" onChange={(event) => getCity(event.target.value)} value={city} />
                    </div>
                    <div className="moreDetails">
                    <label>State</label>
                    <input type="text" onChange={(event) => getState(event.target.value)} value={home_state} />
                    </div>
                    <div className="moreDetails">
                    <label>Zip</label>
                    <input type="text" onChange={(event) => getZip(event.target.value)} value={zipcode} />
                    </div>
                    {/* <Link to='/wizard/step-2'>Next</Link> */}
                </form>
                </div>
                : 
                <div className="dashboard">
                 <div className="header">
                    <h1>Add New Listing</h1>
                    <Link id="cancel" to='/'>Cancel</Link>
                </div>
                <form className='step1'>
                    <label>Property Name</label>
                    <input type="text" onChange={(event) => getName(event.target.value)} value={home_name} />
                    <label>Address</label>
                    <input type="text" onChange={(event) => getAddress(event.target.value)} value={address} />
                    <div className="moreDetails">
                        <label>City</label>
                        <input type="text" onChange={(event) => getCity(event.target.value)} value={city} />
                    </div>
                    <div className="moreDetails">
                        <label>State</label>
                        <input type="text" onChange={(event) => getState(event.target.value)} value={home_state} />
                    </div>
                    <div className="moreDetails">
                        <label>Zip</label>
                        <input type="text" onChange={(event) => getZip(event.target.value)} value={zipcode} />
                    </div>
                    <Link className="next" to='/wizard/step-2'>Next</Link>
                </form>
                </div>
                }
            </div>
         );
    }
}

const mapStateToProps = state => {
    let { home_name, address, city, home_state, zipcode } = state;
    return {
        home_name,
        address,
        city,
        home_state,
        zipcode
    }
}
 
export default connect(mapStateToProps, { getName, getAddress, getCity, getState, getZip })(withRouter(Wizard));