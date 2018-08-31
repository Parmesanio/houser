import React, { Component } from 'react';
import { postHome } from '../../redux/reducer';
import { connect } from 'react-redux';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>Wizard</div>
         );
    }
}
 
export default Wizard;