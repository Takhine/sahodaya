import React from "react";

export default function Normal({ section }) {
  const { content, heading } = section;
  return (
    <section className="blog-section">
      {heading && <h2 className="section-heading">{heading}</h2>}
      <p className="section-content">{content}</p>
    </section>
  );
}
