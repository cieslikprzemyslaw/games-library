import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";

function Routes() {

    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    );
}

export default Routes