import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './house.css';

const House = (props) => {
    console.log(props);
    let { home_name, address, city, state, zipcode, id, home_url, mortgage, rent } = props;
    function handleDelete(id) {
        axios.delete(`/api/homes/${id}`)
            .then(() => window.location.reload())
            .catch(err => console.log('Err in axios.delete', err));
    }
    return ( 
        <div className="house">
            <img src={home_url} alt={home_name} />
            <div className="details">
            <p>Property Name: {home_name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zipcode}</p>
            </div>
            <div className="mortgage">
            <p>Monthly Mortgage: {mortgage}</p>
            <p>Desired Rent: {rent}</p>
            <Link to={`/wizard/${id}`}>Edit</Link>
            </div>
            <button className="delete" onClick={() => handleDelete(id)}>X</button>
        </div>
     );
}
 
export default House;