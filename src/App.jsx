import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MealCards from './Components/MealCards/MealCards'
import SingleMeal from './Components/SingleMeal/SingleMeal'
import Header from './Components/Header/Header'
import Order from './Components/Order/Order'

function App() {
  const [meals, setMeals] = useState(0);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState ([]);
  
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data =>setMeals(data.meals))
        // .then(data =>console.log(data.meals))
    },[])
    useEffect(()=>{
      // const storedOrder = getStored
    },[])
 
    const handleAddToOrder = meal =>{
      // console.log('clicked');
    }
    console.log(Array.from(meals
      ).filter(meal=> meal.strMeal.toLowerCase().includes(query)));
  return (
    <div className="App">
       <Header></Header>
      <div className='text-center my-10'>
            <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mr-4" onChange={(e) =>setQuery(e.target.value)}/>
            {/* <button className='btn btn-accent w-1/12'>Search</button> */}
        </div>
     
    
     
     {/* <MealCards meals={meals}
     key={meals.idMeal}></MealCards> */}
     <div className='ml-5 my-10 flex'>
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                
                // meals.map(meal => <SingleMeal meal={meal}></SingleMeal>)
                Array.from(meals
                    ).filter(meal=> meal.strMeal.toLowerCase().includes(query)).map(meal =><SingleMeal key={meal.idMeal} meal = {meal} handleAddToOrder={handleAddToOrder}></SingleMeal>)
            }
          
        
        </div>
        
          <div className='mx-auto'>
          <Order order={order}></Order>
          </div>
        

     </div>
    </div>
  )
}





export default App
