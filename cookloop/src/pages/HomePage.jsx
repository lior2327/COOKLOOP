import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/image.png";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    const { data, error } = await supabase
      .from("recipes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setRecipes(data);
  }

  async function deleteRecipe(id) {
    const confirmDelete = window.confirm("Delete this recipe?");
    if (!confirmDelete) return;

    const { error } = await supabase.from("recipes").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    fetchRecipes();
  }

  return (
    <main className="page">
      <section className="hero-section">
        <h1 className="hero-title">
          Welcome to
          <br />
          COOKLOOP
        </h1>

        <img src={logo} alt="COOKLOOP logo" className="hero-logo-big" />
      </section>

      <section className="card">
        <div className="card-content">
          <h2>Trending Recipes</h2>
          <p>Discover popular recipes from creators.</p>
        </div>
      </section>

      {recipes.map((recipe) => (
        <section className="card" key={recipe.id}>
          <img
            src={
              recipe.image_url ||
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            }
            alt={recipe.title}
            className="recipe-img"
          />

          <div className="card-content">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <div className="recipe-actions">
              <button>♡ 0</button>
              <button>💬 0</button>
              <button>↗ Share</button>
            </div>

            <button className="button">Save Recipe</button>

            <button className="button" onClick={() => deleteRecipe(recipe.id)}>
              Delete Recipe
            </button>
          </div>
        </section>
      ))}
    </main>
  );
}