import React from "react";
import { Row, Col, Image, Card } from "antd";
import { NavLink } from "react-router-dom";
import { cleanSlug } from "../../helpers";
import { latestBlogs, homeBlogs } from "blogs/latest-blogs";
import FadeIn from 'react-fade-in';

const { Meta } = Card;

const BlogCard = ({ id, author, date, summary, blog_image, title }) => {
  return (
    <NavLink exact to={`/blogs/${cleanSlug(title)}/${id}`}>
      <Card
        className="blog-card"
        hoverable
        cover={<Image src={blog_image} alt={title} />}
      >
        <FadeIn>
        <Meta title={title} description={summary} />
        </FadeIn>
        <footer className="content-footer">
          <p className="date">{date}</p>
          <p className="member">{author}</p>
        </footer>
      </Card>
    </NavLink>
  );
};
export default function Recommended({isHome}) {
  const blogs = isHome?homeBlogs:latestBlogs
  return (
    <div className="recommended-articles">
        <h2 className="recommended-title">Recommended Articles</h2>
      <Row gutter={12}>
        {blogs.map((blog) => (
          <Col className="card-col" key={blog.id} xs={24} sm={12} md={8}>
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
