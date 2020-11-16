import React from "react";
import Layout from "components/Layout";
import BreadcrumbBar from "components/BreadcrumbBar";
// Components
import LatestBlogs from "./LatestBlogs";
import Banner from "./Banner";
import StickyAd from "./StickyAd";


export default function Blogs() {
  return (
    <Layout>
      <div className="header-container blogs-page">
        <BreadcrumbBar page="Blogs" />
        <Banner />
        <LatestBlogs />
        <StickyAd />
      </div>
    </Layout>
  );
}
