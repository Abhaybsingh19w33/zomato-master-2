// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Component
import Temp from "./Components/temp";
import Master from "./Components/master";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
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