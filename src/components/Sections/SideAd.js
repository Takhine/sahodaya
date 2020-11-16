import React from "react";
import { Row, Col, Image } from "antd";
export default function SideAd({ section }) {
  const { content, ad, adAlt, heading } = section;
  return (
    <section className="blog-section">
      <Row gutter={12}>
        <Col xs={24} md={16} lg={18}>
          {heading && <h2 className="section-heading">{heading}</h2>}
          <p className="section-content">{content}</p>
        </Col>
        <Col xs={24} md={8} lg={6}>
          <Image className="side-ad" src={ad} alt={adAlt} width="100%" />
        </Col>
      </Row>
    </section>
  );
}
