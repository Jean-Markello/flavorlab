import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meals from "./components/Meals";
import Instructors from "./components/Instructor";
import Services from "./components/Services";
import Booking from "./components/Booking";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/flavorlab/" element={<Home/>}>
              <Home />
            </Route>
            <Route path="/flavorlab/meals">
              <Meals />
            </Route>
            <Route path="/flavorlab/about">
              <About />
            </Route>
            <Route path="/flavorlab/instructors">
              <Instructors/>
            </Route>
            <Route path="/flavorlab/services">
              <Services/>
            </Route>
            <Route path="/flavorlab/booking">
              <Booking/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
