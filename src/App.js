import './App.css';
import React from 'react';
import MovieList from './movielist';
import Nav from './nav'
import {MovieProvider} from './moviecontext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
