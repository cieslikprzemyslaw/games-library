import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function Routes() {

    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    );
}

export default Routes