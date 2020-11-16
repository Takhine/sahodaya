import React from "react";
import { Image } from "antd";

export default function CenterAd({ section }) {
  const { heading, image, imageAlt } = section;
  return (
    <section className="blog-section">
      {heading && <h2 className="section-heading">{heading}</h2>}
      <Image className="side-ad" src={image} alt={imageAlt} width="100%" />
    </section>
  );
}
