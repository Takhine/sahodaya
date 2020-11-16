import React from "react";
import { Row, Col, Image } from "antd";

export default function ImageCol({ section }) {
  const { content, imageAlt, image, heading } = section;
  return (
    <section className="blog-section">
      <Row gutter={12}>
        <Col xs={24} md={10} lg={12}>
          <Image
            className="blog-image"
            src={image}
            alt={imageAlt}
            width="100%"
          />
        </Col>
        <Col xs={24} md={14} lg={12}>
          {heading && <h2 className="section-heading">{heading}</h2>}
          <p className="section-content">{content}</p>
        </Col>
      </Row>
    </section>
  );
}
