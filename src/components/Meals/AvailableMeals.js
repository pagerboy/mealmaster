import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'Fresh Chiken Birayni with Salad',
    price: 200,
  },
  {
    id: 'm2',
    name: 'Egg Roll',
    description: 'A North Indian special',
    price: 25,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 100,
  },
  {
    id: 'm4',
    name: 'Poha',
    description: 'Rajasthani special and delicious',
    price: 60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
