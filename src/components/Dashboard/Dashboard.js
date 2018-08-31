import React, { Component } from 'react';
import House from '../House/House';
import { getHomes } from '../../redux/reducer';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <House />
         );
    }
}

const mapStateToProps = state => {
    let { houseList } = state;
    return {
        houseList
    }

}
 
export default connect(mapStateToProps, {getHomes})(Dashboard);