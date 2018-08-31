import React from 'react';
import axios from 'axios';

const House = (props) => {
    console.log(props);
    let { home_name, address, city, state, zipcode, id } = props;
    function handleDelete(id) {
        axios.delete(`/api/homes/${id}`)
            .then(() => window.location.reload())
            .catch(err => console.log('Err in axios.delete', err));
    }
    return ( 
        <div>
            <p>Property Name: {home_name}</p>
            <p>Address: {address}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Zip: {zipcode}</p>
            <button onClick={() => handleDelete(id)}>X</button>
        </div>
     );
}
 
export default House;