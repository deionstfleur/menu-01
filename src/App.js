import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Homepage'
import Breakfast from './components/BreakfastPage'
import About from './components/About'
import Lunch from './components/LunchPage'
import Dinner from './components/DinnerPage'
import Weekend from './components/Weekend'
import Contact from './components/Contact'
import FamilyMeals from './components/FamilyMeals'
import Gourmet from './components/Gourmet'
import MealPrep from './components/MealPrep'


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
        <Route path="/contact-us" component={Contact} exact />
        <Route path="/Family-Meals" component={FamilyMeals} exact />
        <Route path="/Gourmet-Meals" component={Gourmet} exact />
        <Route path="/Meal-Prep" component={MealPrep} exact />
      </Switch>
    </Router>
  );
}

export default App;
