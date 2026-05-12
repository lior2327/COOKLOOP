import { useState } from "react";

const filters = [
  "Holiday Recipes",
  "Gluten Free",
  "Easy Recipes",
  "5 Ingredients",
  "Dairy",
  "Parve",
];

const recipes = [
  {
    title: "Honey Cake",
    category: "Holiday Recipes",
    details: "Holiday dessert · 45 min",
  },
  {
    title: "Gluten Free Pasta",
    category: "Gluten Free",
    details: "Healthy meal · 20 min",
  },
  {
    title: "Quick Salad",
    category: "Easy Recipes",
    details: "Easy recipe · 10 min",
  },
  {
    title: "5 Ingredient Pancakes",
    category: "5 Ingredients",
    details: "Breakfast · 15 min",
  },
  {
    title: "Creamy Lasagna",
    category: "Dairy",
    details: "Dairy meal · 50 min",
  },
  {
    title: "Rice Bowl",
    category: "Parve",
    details: "Parve meal · 25 min",
  },
];

export default function SearchPage() {
  const [selectedFilter, setSelectedFilter] = useState("Holiday Recipes");

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category === selectedFilter
  );

  return (
    <main className="page">
      <h1 className="page-title">Search</h1>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input placeholder="Search recipe, user or ingredient..." />
      </div>

      <section className="card">
        <div className="card-content">
          <h2>Filters</h2>

          <div className="filter-list">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  selectedFilter === filter
                    ? "filter-chip active-filter"
                    : "filter-chip"
                }
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-content">
          <h2>{selectedFilter}</h2>

          {filteredRecipes.map((recipe) => (
            <div className="result-card" key={recipe.title}>
              <h3>{recipe.title}</h3>
              <p>{recipe.details}</p>
              <button className="button">View Recipe</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}