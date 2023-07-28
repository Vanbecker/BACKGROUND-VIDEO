// import { useEffect, useState } from "react";

// const AllCocktails = () => {
//     const [cocktails, setCocktails] = useState([]);

//     const fetchCocktails = async () => {
//         const cocktailsResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
//         const cocktailsJs = await cocktailsResponse.json();

//         setCocktails(cocktailsJs.drinks);
//     };

//     useEffect(() => {
//         fetchCocktails();
//     }, []);

//     return (
//         <div>
//             <h1>List of Cocktails</h1>

//             {cocktails.length === 0 && <p>Loading...</p>}

//             {cocktails.map((cocktail) => (
//                 <div key={cocktail.idDrink}>
//                     <p>{cocktail.strDrink}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default AllCocktails;

////

import React, { useState, useEffect } from 'react';

const AllCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCocktails(data.drinks);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCocktails();
    }, []);

    return (
        <div>
            <h1>Liste des cocktails</h1>
            <div>
                {cocktails.map((cocktail) => (
                    <div key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '150px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCocktails;
