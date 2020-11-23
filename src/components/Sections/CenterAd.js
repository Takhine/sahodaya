import React from "react";
import { Image } from "antd";

export default function CenterAd({ section }) {
  const { heading, image, imageAlt } = section;
  return (
    <section className="blog-section">
      {heading && <h2 className="section-heading center">{heading}</h2>}
      <div style={{position: "relative"}}>
      <Image className="side-ad" src={image} alt={imageAlt} width="100%" />
      <span className="ad-tag">Sponsored</span>
      </div>

    </section>
  );
}
