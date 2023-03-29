import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const MealCards = (props) => {
    // console.log(props.meals);
    const meals =props.meals;
    
    
    
    return (
       
         <div>
            {/* {
                
                // meals.map(meal => <SingleMeal meal={meal}></SingleMeal>)
                Array.from(meals
                    ).filter(meal=> meal.strMeal.toLowerCase().includes(query)).map(meal =><SingleMeal key={meal.idMeal} meal = {meal}></SingleMeal>)
            } */}
          
        
        </div>
      
    );
};

export default MealCards;