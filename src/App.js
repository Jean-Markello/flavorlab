import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meals from "./components/Meals";
import Instructors from "./components/Instructor";
import Services from "./components/Services";
import Booking from "./components/Booking";
import About from "./components/About";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/meals">
              <Meals />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/instructors">
              <Instructors/>
            </Route>
            <Route path="/services">
              <Services/>
            </Route>
            <Route path="/booking">
              <Booking/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
