const chats = [
  {
    name: "Chef Elena",
    message: "That reduction looks perfect! 🔥",
    time: "2m",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Marcus J.",
    message: "Sent a photo",
    time: "1h",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Sarah Bakes",
    message: "The sourdough starter is finally active!",
    time: "3h",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "David Chen",
    message: "Check out this ramen place I found.",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Noa",
    message: "Your pasta recipe was amazing 😍",
    time: "1d",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Daniel",
    message: "Can you send the ingredients list?",
    time: "2d",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598",
  },
  {
    name: "Food Lovers",
    message: "Weekly challenge starts tomorrow!",
    time: "3d",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
];

export default function MessagesPage() {
  return (
    <main className="page">
      <h1 className="page-title">Inbox</h1>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input placeholder="Search messages..." />
      </div>

      <section className="card">
        {chats.map((chat) => (
          <div className="message-row" key={chat.name}>
            <img src={chat.image} alt={chat.name} />

            <div style={{ flex: 1 }}>
              <h3>{chat.name}</h3>
              <p>{chat.message}</p>
            </div>

            <span style={{ fontSize: "12px", color: "#777" }}>
              {chat.time}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}