import React from "react";
import { Row, Col, Image } from "antd";
import { PLACEHOLDER } from "../../constants";
// Latest Blogs
import {latestBlogs} from "blogs/latest-blogs";

const LatestBlog = ({
  author,
  date,
  title,
  blog_image,
  banner_image,
  summary,
}) => {
  return (
    <div className="latest-blog">
      <Row gutter={12}>
        <Col xs={24} sm={8} md={12}>
          <div className="image-section">
            <Image
              width="100%"
              src={blog_image || banner_image}
              placeholder={PLACEHOLDER}
            />
          </div>
        </Col>
        <Col xs={24} sm={16} md={12}>
          <div className="content-section">
            <h2 className="content-heading">{title}</h2>
            <p className="content-summary">"{summary}"</p>
            <footer className="content-footer">
              <p className="date">{date}</p>
              <p className="member">{author}</p>
            </footer>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default function LatestBlogs() {
  console.log(latestBlogs)
  return (
    <div className="latest-blogs-container">
      {latestBlogs.map((blog) => (
        <LatestBlog key={blog.id} {...blog} />
      ))}
    </div>
  );
}
