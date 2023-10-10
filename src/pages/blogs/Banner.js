import React from "react";
import { Image } from "antd";

export default function Banner({banner_image="https://fastly.picsum.photos/id/998/1600/480.jpg?hmac=KhdErnq0Simd_ZMd5iuCuZ0zFWgc3YZlO2-espItSiM", title="Sahodaya"}) {
  return (
    <div className="blogs-banner">
      <Image src={banner_image} alt="Sahodaya" width="100%" placeholder={title} />
    </div>
  );
}
