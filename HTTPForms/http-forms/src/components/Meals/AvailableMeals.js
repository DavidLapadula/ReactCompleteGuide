import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("test/firebase/url");
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error('Something wrong'); 
      }

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals({
          id: key, 
          name: responseData[key].name,
          description: responseData[key].description, 
          price: responseData[key].price
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    }; 

    
    fetchMeals().catch((error) =>{
      setIsLoading(false);
      setHttpError(error.message);
    });
    
  }, []);


  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    ); 
  };

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>HTTP Error</p>
      </section>
    ); 
  };

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
