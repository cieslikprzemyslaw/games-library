import { BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Navigation from './components/Navigation';
import GlobalStyles from "./assests/GlobalStyles";


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
        <Router>
          <Navigation/>
          <Routes/>
        </Router>
    </div>
  );
}

export default App;
