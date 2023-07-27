import React, { useState, useEffect } from 'react';

const MealsByCategory = ({ category }) => {
    const [isLoadingMealsByCategory, setIsLoadingMealsByCategory] = useState(false);
    const [mealsByCategory, setMealsByCategory] = useState([]);

    useEffect(() => {
        const fetchMealsByCategory = async () => {
            setIsLoadingMealsByCategory(true);
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setMealsByCategory(data.meals || []);
                setIsLoadingMealsByCategory(false);
            } catch (error) {
                console.error('Pas de réponse:', error);
                setMealsByCategory([]);
                setIsLoadingMealsByCategory(false);
            }
        };

        fetchMealsByCategory();
    }, [category]);

    return (
        <div>
            <h2>Liste des recettes liées à la catégorie : {category.strCategory}</h2>

            {isLoadingMealsByCategory ? (
                <p>Chargement...</p>
            ) : (
                <div>
                    {mealsByCategory.map((meal) => {
                        return (
                            <div key={meal.idMeal}>
                                <h3>{meal.strMeal}</h3>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MealsByCategory;
