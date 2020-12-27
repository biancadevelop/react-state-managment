import React, {useContext} from 'react';
import {MovieContext} from './moviecontext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return ( 
        <div className="nav">
            <h3 className="nav-name">Bianca</h3>
            <p>List Of Movies: {movies.length} </p>
        </div>
     );
}
 
export default Nav;