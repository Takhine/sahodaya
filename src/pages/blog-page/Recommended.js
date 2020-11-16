import React from "react";
import { Row, Col, Image, Card } from "antd";
import { NavLink } from "react-router-dom";
import { cleanSlug } from "../../helpers";
import { latestBlogs } from "blogs/latest-blogs";

const { Meta } = Card;

const BlogCard = ({ id, author, date, summary, blog_image, title }) => {
  return (
    <NavLink exact to={`/blogs/${cleanSlug(title)}/${id}`}>
      <Card
        hoverable
        cover={<Image src={blog_image} alt={title} />}
      >
        <Meta title={title} description={summary} />
      </Card>
    </NavLink>
  );
};
export default function Recommended() {
  return (
    <div className="recommended-articles">
      <Row gutter={12}>
      {latestBlogs.map((blog) => (
        <Col key={blog.id} xs={24} sm={12} md={8}>
            <BlogCard {...blog} />
        </Col>
          ))}
      </Row>
    </div>
  );
}
