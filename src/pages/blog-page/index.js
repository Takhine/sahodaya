import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { useParams } from "react-router-dom";
import { getSectionContent } from "helpers";
import BlogBreadcrumb from "components/BlogBreadcrumb";
// Components
import Header from "./Header";
import Banner from "../blogs/Banner";
import NextPrev from "./NextPrev";
import Recommended from "./Recommended";


export default function BlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    loading: true,
    next_prev: {},
    author: "",
    date: "",
    title: "",
    banner_image: "",
    sections: [],
  });
  const fetchBlog = () => {
    import(`blogs/blog_${blogId}`).then((content) => {
      console.log(content[`blog_${blogId}`]);
      const blogContent = content[`blog_${blogId}`];
      setBlog({
        ...blog,
        title: blogContent.title,
        date: blogContent.date,
        author: blogContent.author,
        next_prev: blogContent.next_prev,
        banner_image: blogContent.banner_image,
        sections: blogContent.sections,
      });
    });
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const { title, author, date, sections, banner_image, next_prev } = blog;
  return (
    <Layout>
      <div className="header-container blog-page">
        <BlogBreadcrumb page={title} />
        {/* Banner */}
        <Banner banner_image={banner_image} />
        {/* Main Section */}
        <Header title={title} author={author} date={date} />
        {sections.map((section) => (
          <section key={section.id} className="section-container">
            {getSectionContent(section)}
          </section>
        ))}

        {/* Next/Prev Section */}
        {/* <NextPrev {...next_prev} /> */}
        {/* Recommended Articles */}
        {/* <Recommended /> */}
      </div>
    </Layout>
  );
}
