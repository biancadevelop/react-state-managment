import './App.css';
import React from 'react';
import MovieList from './movielist';
import Nav from './nav'
import {MovieProvider} from './moviecontext'
import AddMovie from './addmovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
