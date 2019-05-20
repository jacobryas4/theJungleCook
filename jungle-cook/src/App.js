import React, { Component } from 'react';
import './App.css';
import NavBar from './components/UI/NavBar/NavBar';
import FooterNav from './components/UI/FooterNav/FooterNav';
import Home from './components/containers/Home/Home';
import { Route } from 'react-router-dom';
import Browse from './components/containers/Browse/Browse';
import Login from './components/containers/Login/Login';
import Create from './components/containers/Create/Create';
import YourRecipes from './components/containers/YourRecipes/YourRecipes';
import ViewRecipe from './components/containers/ViewRecipe/ViewRecipe';
import EditRecipe from './components/containers/EditRecipe/EditRecipe';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      <div className="site-container">
         
          <Route path="/" exact component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
          <Route path="/your-recipes" component={YourRecipes} />
          <Route path="/view-recipe/:id" component={ViewRecipe} />
          <Route path="/edit-recipe" component={EditRecipe} />
       
      </div>
        
        <FooterNav />
      </div>
    );
  }
}

export default App;
