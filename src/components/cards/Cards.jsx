import React from 'react';
import Card from './Card';

const Cards = ({recipes,handleCook}) => {
    return (
        <div>
            <div className="header-texts">
                <h1>Hello</h1>
                <p>Miaoooooooo!!</p>
            </div>
            {
                recipes.map(recipe=><Card key={recipe.recipe_id} recipe={recipe} handleCook={handleCook}></Card>)
            }
            
        </div>
    );
};

export default Cards;