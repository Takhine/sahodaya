import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import { useParams } from "react-router-dom";
import { getSectionContent } from "helpers";
import BlogBreadcrumb from "components/BlogBreadcrumb";
export default function BlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({
    loading: true,
    prev: 0,
    next: 1,
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
        next: blogContent.next,
        prev: blogContent.prev,
        banner_image: blogContent.banner_image,
        sections: blogContent.sections,
      });
    });
  };

  useEffect(() => {
    fetchBlog();
  }, [blogId]);

  const { title, sections } = blog;
  return (
    <Layout>
      <div className="header-container blog-page">
        <BlogBreadcrumb page={title} />

        <h1>Title</h1>
        {/* Banner */}

        {/* Main Section */}
        {sections.map((section) => (
          <section key={section.id} className="section-container">
            {getSectionContent(section)}
          </section>
        ))}

        {/* Next/Prev Section */}
        {/* Recommended Articles */}
      </div>
    </Layout>
  );
}
