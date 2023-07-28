import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RandomCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    const getRandomCocktails = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const cocktail = response.data.drinks[0];
            setCocktails((prevCocktails) => [...prevCocktails, cocktail]);
        } catch (error) {
            console.error('Erreur lors de la récupération du cocktail aléatoire:', error);
        }
    };

    useEffect(() => {
        getRandomCocktails();

        const interval = setInterval(getRandomCocktails, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            <h2>Cocktails Aléatoires</h2>
            {cocktails.length > 0 ? (
                <Slider {...settings}>
                    {cocktails.map((cocktail) => (
                        <div key={cocktail.idDrink}>
                            <h3>{cocktail.strDrink}</h3>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px', height: '200px' }} />
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
};

export default RandomCocktails;
