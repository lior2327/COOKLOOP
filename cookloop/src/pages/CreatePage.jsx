import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("Easy Recipes");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("recipes").insert([
      {
        title,
        description,
        ingredients,
        steps,
        category,
        image_url: "",
      },
    ]);

    if (error) {
      setMessage("Error: " + error.message);
      return;
    }

    setMessage("Recipe published successfully!");
    setTitle("");
    setDescription("");
    setIngredients("");
    setSteps("");
    setCategory("Easy Recipes");
  }

  return (
    <main className="page">
      <h1 className="page-title">Create Recipe</h1>

      <section className="card">
        <form className="card-content" onSubmit={handleSubmit}>
          <h2>Upload Media</h2>

          <div className="upload-box">
            <span>＋</span>
            <p>Upload recipe photo or video</p>
          </div>

          <label>Recipe Title</label>
          <input
            className="form-input"
            placeholder="Example: Creamy Pasta"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            className="form-textarea"
            placeholder="Write a short description about your recipe..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Ingredients</label>
          <textarea
            className="form-textarea"
            placeholder="Tomatoes, pasta, cheese..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          <label>Cooking Steps</label>
          <textarea
            className="form-textarea"
            placeholder="Step 1: Mix ingredients..."
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />

          <label>Category</label>
          <select
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Easy Recipes</option>
            <option>Gluten Free</option>
            <option>Dairy</option>
            <option>Parve</option>
            <option>Holiday Recipes</option>
            <option>Desserts</option>
          </select>

          <button className="button" type="submit">
            Publish Recipe
          </button>

          {message && <p>{message}</p>}
        </form>
      </section>
    </main>
  );
}