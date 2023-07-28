import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCocktail = () => {
    const [cocktail, setCocktail] = useState(null);

    const getRandomCocktail = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setCocktail(response.data.drinks[0]);
        } catch (error) {
            console.error('Erreur lors de la récupération du cocktail aléatoire:', error);
        }
    };

    useEffect(() => {
        getRandomCocktail();

        const interval = setInterval(getRandomCocktail, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h2>Cocktail Aléatoire</h2>
            {cocktail ? (
                <div>
                    <h3>{cocktail.strDrink}</h3>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', height: '200px' }} />
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default RandomCocktail;

////////


