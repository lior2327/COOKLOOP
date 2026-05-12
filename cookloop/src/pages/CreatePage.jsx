export default function CreatePage() {
  return (
    <main className="page">
      <h1 className="page-title">Create Recipe</h1>

      <section className="card">
        <div className="card-content">
          <h2>Upload Media</h2>

          <div className="upload-box">
            <span>＋</span>
            <p>Upload recipe photo or video</p>
          </div>

          <label>Recipe Title</label>
          <input className="form-input" placeholder="Example: Creamy Pasta" />

          <label>Description</label>
          <textarea
            className="form-textarea"
            placeholder="Write a short description about your recipe..."
          />

          <label>Ingredients</label>
          <textarea
            className="form-textarea"
            placeholder="Tomatoes, pasta, cheese..."
          />

          <label>Cooking Steps</label>
          <textarea
            className="form-textarea"
            placeholder="Step 1: Mix ingredients..."
          />

          <label>Category</label>
          <select className="form-input">
            <option>Easy Recipes</option>
            <option>Gluten Free</option>
            <option>Dairy</option>
            <option>Parve</option>
            <option>Holiday Recipes</option>
            <option>Desserts</option>
          </select>

          <button className="button">Publish Recipe</button>
        </div>
      </section>
    </main>
  );
}