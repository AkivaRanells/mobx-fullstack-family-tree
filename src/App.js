import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import FamilyTree from './components/FamilyTree';

class App extends Component {
  // componentDidMount(){
  //   fetch('/users').then(data=>console.log(data))
  // }
  render() {
    return (
      <div className="App">
        <SearchForm className="search-form" ></SearchForm>
        <FamilyTree></FamilyTree>
      </div>
    );
  }
}

export default App;
