import React from "react";
import { Image } from "antd";

export default function Banner({banner_image="https://via.placeholder.com/1600x480", title="Sahodaya"}) {
  return (
    <div className="blogs-banner">
      <Image src={banner_image} alt="Sahodaya" width="100%" placeholder={title} />
    </div>
  );
}
