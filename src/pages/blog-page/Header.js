import React from "react";
import FadeIn from 'react-fade-in';

export default function Header({ title, author, date }) {
  return (
    <header className="blog-header">
      <FadeIn>
      <h1 className="blog-title">{title}</h1>
      </FadeIn>
      <div className="meta-info">
        <h3 className="author">{author}</h3>
        <h3 className="date">{date}</h3>
      </div>
    </header>
  );
}
