import React from 'react';
import PropTypes from 'prop-types';

const WantCook = ({wantCook,handleCook}) => {
    const {recipe_id,recipe_name,short_description,preparing_time,calories,ingredients}=wantCook;
    
    return (
        <div>
            <h1>{preparing_time}</h1>
            <h1>{recipe_name}</h1>
            <ul>
                {ingredients.map((ingredient,index)=>{
                    <li key={index}>{ingredient}</li>
                })}
            </ul>
        </div>
    );
};

WantCook.propTypes={
wantCook:PropTypes.object.isRequired
}

export default WantCook;