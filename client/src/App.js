import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// Component
import Temp from "./Components/temp";
// import Master from "./Components/master";
import React, { Fragment } from "react";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp} />
    </Fragment>
  );
}

export default App;

// :type

// delivery
// dining
// nightlife
// nutrition

// master -> type 