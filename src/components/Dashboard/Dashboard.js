import React, { Component } from 'react';
import House from '../House/House';
import { getHomes } from '../../redux/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    componentDidMount() {
        setTimeout(() => 
            axios.get('/api/homes')
                .then(res => {
                    this.props.getHomes(res.data)
                }).catch(err => console.log('Err in axios.get', err)), 500)
    }

    render() { 
        let { houseList } = this.props;
        let mappedHomes = houseList.map(home => {
            let { id } = home;
            return <House key={id} {...home} />
        });
        return ( 
            <div>
                <div>
                    <h1>Dashboard</h1>
                    <Link to='/wizard'>Add New Property</Link>
                </div>
                <h4>Home Listings</h4>
                {mappedHomes}
            </div>
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