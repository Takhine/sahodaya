import React from "react";

export default function Header({ title, author, date }) {
  return (
    <header className="blog-header">
      <h1>{title}</h1>
      <div className="meta-info">
        <h3 className="author">{author}</h3>
        <h3 className="date">{date}</h3>
      </div>
    </header>
  );
}
