import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
// import Master from "./Components/master";
import { Fragment } from "react";

// pages
import Home from "./Page/Home";

function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
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