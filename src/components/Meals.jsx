import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", {}, []);

  if (isLoading) {
    return (
      <section id="meals-loading">
        <p>Loading meals...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="meals-error">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
