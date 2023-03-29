// import React, { useEffect, useState } from 'react';

// const Header = (props) => {
//     // console.log(props.meals);
//     const [query, setQuery] = useState("")  
//     const meals = props.meals
//     // const [searchText, setSearchText] =useState("");
//     // console.log(meals.filter(meal=> meal.strMeal.toLowerCase().includes("fofos")));
    
//     return (
//         <div className='text-center my-10'>
//             <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mr-4" onChange={(e) =>setQuery(e.target.value)}/>
//             {/* <button className='btn btn-accent w-1/12'>Search</button> */}
//         </div>
//     );
// };

// export default Header;
import React from 'react';

const Header = () => {
    return (
        <div className='text-center text-5xl font-bold mt-4 text-emerald-700'>
            <h1>Welcome To my Restaurant!!</h1>
        </div>
    );
};

export default Header;