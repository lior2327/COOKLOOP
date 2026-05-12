const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    likes: "1.2K",
    comments: 84,
    shares: 31,
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    likes: "980",
    comments: 52,
    shares: 18,
  },
  {
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    likes: "2.4K",
    comments: 140,
    shares: 60,
  },
  {
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    likes: "760",
    comments: 33,
    shares: 12,
  },
  {
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    likes: "1.1K",
    comments: 65,
    shares: 22,
  },
  {
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
    likes: "540",
    comments: 21,
    shares: 9,
  },
];

export default function ProfilePage() {
  return (
    <main className="page">
      <section className="profile-top">
        <button className="settings-btn">⚙️</button>

        <img
          className="avatar"
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
          alt="Cooking profile"
        />

        <h1>LIOR</h1>

        <div className="profile-stats">
          <div>
            <strong>24</strong>
            <span>Posts</span>
          </div>

          <div>
            <strong>1.2K</strong>
            <span>Followers</span>
          </div>

          <div>
            <strong>340</strong>
            <span>Following</span>
          </div>
        </div>

        <button className="button">Edit Profile</button>
      </section>

      <h2 className="section-title">My Recipes</h2>

      <section className="post-grid">
        {posts.map((post, index) => (
          <div className="post-tile" key={index}>
            <img src={post.image} alt="Recipe" />

            <div className="post-overlay">
              <span>♡ {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>↗ {post.shares}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}