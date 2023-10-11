import React from "react";
import Normal from "components/Sections/Normal";
import SideAd from "components/Sections/SideAd";
import ImageCol from "components/Sections/ImageCol";
import CenterAd from "components/Sections/CenterAd";

export const getSectionContent = (section) => {
  const { type } = section;
  switch (type) {
    case "normal":
      return <Normal section={section} />;
    // case "side-ad":
    //   return <SideAd section={section} />;
    case "image-col":
      return <ImageCol section={section} />;
    // case "center-ad":
    //   return <CenterAd section={section} />;
    default:
      return "";
  }
};
