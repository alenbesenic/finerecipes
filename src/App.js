import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './views/Home';
import Recipes from './views/Recipes';
import MyRecipes from './views/MyRecipes';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/recipes" component={Recipes}/>
          <Route path="/my-recipes" component={MyRecipes}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
