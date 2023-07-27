import React, { useState, useEffect } from 'react';
import MealsByCategory from './MealsByCategory';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Liste des catégories :</h2>
            <div className="row justify-content-center">
                {categories.map((category) => (
                    <div key={category.idCategory} className="col-md-3 d-flex justify-content-center">
                        <button
                            className={`btn btn-primary btn-block mb-3 ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.strCategory}
                        </button>
                    </div>
                ))}
            </div>
            {selectedCategory && <MealsByCategory category={selectedCategory} />}
        </div>
    );
};

export default AllCategory;
