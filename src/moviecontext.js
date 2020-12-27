import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name:'happy gilmore',
            price: '$10',
            id: 123
        },
        {
            name:'happy more',
            price: '$5',
            id: 124
        },
        {
            name:'gills',
            price: '$3',
            id: 125
        }
    ]);
    return ( 
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
     );
}