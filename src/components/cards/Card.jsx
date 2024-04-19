import React from 'react';
import PropTypes from 'prop-types';

const Card = ({recipe,handleCook}) => {
    
    const {recipe_id,recipe_name,short_description,preparing_time,calories,ingredients}=recipe;
    
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_id}</h2>
    <p>{recipe_name}</p>
    <h2>{calories}</h2>
    <button onClick={()=>handleCook(recipe)}>Want To Cook!</button>
  </div>
</div>
        </div>
    );
};

Card.propTypes={
recipes:PropTypes.object.isRequired
}

export default Card;