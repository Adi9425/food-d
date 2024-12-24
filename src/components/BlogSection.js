import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    title: "Stimulated Cultivated Projection Possession",
    excerpt: "Arranging furnished knowledge agreeable so.",
    image: "/placeholder.svg",
    date: "24 APR, 2019",
    author: "ADMIN",
  },
];

export function BlogSection() {
  return (
    <section className="blog-section">
      <h2 className="blog-title">LATEST NEWS</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
