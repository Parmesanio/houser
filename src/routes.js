import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wizard from './components/Wizard/Wizard';
import WizardTwo from './components/Wizard/WizardTwo';
import WizardThree from './components/Wizard/WizardThree';
import Dashboard from './components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/wizard' component={Wizard} />
        <Route exact path='/wizard/step-2' component={WizardTwo} />
        <Route exact path='/wizard/step-3' component={WizardThree} />
        <Route exact path='/wizard/:id' component={Wizard} />
    </Switch>
);