import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ClassesDisplay from './Components/Class/ClassDisplay'
import history from "./history";
import HomePage from './Pages/Home/HomePage';
import SearchPage from './Pages/Search/SearchPage';
import Cart from './Pages/Cart/Cart';
import YourClasses from './Pages/Account/YourClasses';
import About from './Pages/Account/About';
import Help from './Pages/Account/Help';
import ListYourClasses from './Pages/Account/ListYourClasses';
import YourPayments from './Pages/Account/YourPayments';
import Feedback from './Pages/Account/Feedback';
import Account from './Pages/Account/Account';
import SchoolDisplay from './Components/Schools/SchoolDisplay';
import CommonForms from './Pages/Schools/CommonForms';
import CommonFormPage from './Pages/Schools/CommonFormPage';
import SimpleBottomNavigation from './Components/BottomNavBar';

class App extends React.Component{

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/cart' component={Cart} ></Route>
          <Route exact path='/class' component={SimpleBottomNavigation} ></Route>
          <Route exact path='/search' component={SearchPage} ></Route>
          <Route exact path='/account' component={Account} ></Route>
          <Route exact path='/pidgin/feedback' component={Feedback} ></Route>
          <Route exact path='/your-classes' component={YourClasses} ></Route>
          <Route exact path='/about' component={About} ></Route>
          <Route exact path='/help' component={Help} ></Route>
          <Route exact path='/list-your-classes' component={ListYourClasses} ></Route>
          <Route exact path='/your-payments' component={YourPayments} ></Route>
          <Route exact path='/schools' component={HomePage} ></Route>
          <Route exact path='/common-forms' component={CommonForms} ></Route>
          <Route exact path='/your-common-form' component={CommonFormPage} ></Route>
          <Route exact path='/class-display/:id' component={ClassesDisplay} ></Route>
          <Route exact path='/school-display/:id' component={SchoolDisplay} ></Route>
        </Switch>
      </Router>
    )
  }
}
export default App;