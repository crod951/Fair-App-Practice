import React, {Component, Fragment} from "react"
import {Router, Route} from "react-router-dom"
import {Provider} from "react-redux"

import history from 'services/history/history';
import store from "services/redux/store";

import Vehicles from "../vehicles/Vehicles";
import VehicleDetails from "../vehicle-details/VehicleDetails";

import HeaderBar from './components/header-bar/HeaderBar';
import Logo from './components/logo/Logo';
import GradientBackground from 'components/gradient-background/GradientBackground';


class Root extends Component {
  viewVehicleList = () => {
    history.push(`/`);
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderBar>
            <Logo onClick={this.viewVehicleList} />
          </HeaderBar>
          <GradientBackground />
          <Router history={history}>
            <Fragment>
              <Route exact path="/" component={Vehicles} />
              <Route exact path="/:id" component={VehicleDetails} />
            </Fragment>
          </Router>
        </Fragment>
      </Provider>
    )
  }
}
export default Root
