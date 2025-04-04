import React, { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setItems(response.data.meals);
      }).catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <h1>Meals</h1>
      <div className="container">
        {items.map((item) => (
          <div key={item.idMeal} className="card">
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h2>{item.strMeal}</h2>
            <p>{item.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
