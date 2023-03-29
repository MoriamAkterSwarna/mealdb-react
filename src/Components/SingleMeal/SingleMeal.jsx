import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const SingleMeal = (props) => {
    // console.log(props.meal);
    const {strMeal,strMealThumb,strSource} = props.meal;
    const source = strSource? strSource : 'Not found';
    const handleAddToOrder = props.handleAddToOrder;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p className='overflow-auto'>Source: {source}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleAddToOrder(props.meal)} className="btn btn-accent">Order <FontAwesomeIcon icon={faShoppingBasket} /></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleMeal;