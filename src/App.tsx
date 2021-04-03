import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navigation from "./components/Navigation";
import GlobalStyles from "./assests/GlobalStyles";
import { AppWrapper } from "./styles";

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </AppWrapper>
  );
}

export default App;
