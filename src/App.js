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
            <Route exact path="/MealCooked/" element={<Home/>}>
              <Home />
            </Route>
            <Route path="/MealCooked/meals">
              <Meals />
            </Route>
            <Route path="/MealCooked/about">
              <About />
            </Route>
            <Route path="/MealCooked/instructors">
              <Instructors/>
            </Route>
            <Route path="/MealCooked/services">
              <Services/>
            </Route>
            <Route path="/MealCooked/booking">
              <Booking/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
