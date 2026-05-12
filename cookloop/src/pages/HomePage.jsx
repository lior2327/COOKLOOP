import logo from "../assets/image.png";
const recipes = [
  {
    title: "Healthy Salad",
    details: "Gluten Free · 10 min · by Noa",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    likes: "1.2K",
    comments: 48,
  },
  {
    title: "Creamy Pasta",
    details: "Easy recipe · 20 min · by Chef Dana",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    likes: "890",
    comments: 31,
  },
  {
    title: "Berry Pancakes",
    details: "Dessert · 25 min · by Marcus",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    likes: "2.1K",
    comments: 76,
  },
  {
    title: "Avocado Toast",
    details: "Breakfast · 8 min · by Sarah",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    likes: "740",
    comments: 19,
  },
];

export default function HomePage() {
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
        <section className="card" key={recipe.title}>
          <img src={recipe.image} alt={recipe.title} className="recipe-img" />

          <div className="card-content">
            <h3>{recipe.title}</h3>
            <p>{recipe.details}</p>

            <div className="recipe-actions">
              <button>♡ {recipe.likes}</button>
              <button>💬 {recipe.comments}</button>
              <button>↗ Share</button>
            </div>

            <button className="button">Save Recipe</button>
          </div>
        </section>
      ))}
    </main>
  );
}