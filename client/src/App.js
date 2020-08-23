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

class App extends React.Component{

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/cart' component={Cart} ></Route>
          <Route exact path='/class-display/:id' component={ClassesDisplay} ></Route>
          <Route exact path='/class' component={HomePage} ></Route>
          <Route exact path='/search' component={SearchPage} ></Route>
          <Route exact path='/your-classes' component={YourClasses} ></Route>
          <Route exact path='/about' component={About} ></Route>
          <Route exact path='/help' component={Help} ></Route>
          <Route exact path='/list-your-classes' component={ListYourClasses} ></Route>
          <Route exact path='/your-payments' component={YourPayments} ></Route>
        </Switch>
      </Router>
    )
  }
}
export default App;