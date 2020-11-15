import React, {useEffect, useState} from "react";
import Layout from "components/Layout";
import { useParams } from "react-router-dom";

export default function BlogPage() {
  const { blogId } = useParams();


  useEffect(()=>{
      import(`blogs/blog_${blogId}`).then(blog => {
        console.log(blog[`blog_${blogId}`]);
      });

  },[blogId])
  return (
    <Layout>
      <div className="header-container blog-page">
        <h1>Title</h1>
      </div>
    </Layout>
  );
}
