import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage'
import Breakfast from './components/BreakfastPage'
import About from './components/About'
import Lunch from './components/LunchPage'
import Dinner from './components/DinnerPage'
import Weekend from './components/Weekend'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Breakfast" component={Breakfast} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Lunch" component={Lunch} exact />
        <Route path="/Dinner" component={Dinner} exact />
        <Route path="/weekend-plan" component={Weekend} exact />
      </Switch>
    </Router>
  );
}

export default App;
