import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { cleanSlug } from "helpers";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
export default function NextPrev({ prev, next, nextTitle, prevTitle }) {
  return (
    <div className="next-prev-section">
      {prev && (
        <NavLink exact to={`/blogs/${cleanSlug(prevTitle)}/${prev}`}>
          <Button icon={<LeftCircleOutlined />}>Previous</Button>
        </NavLink>
      )}
      {next && (
        <NavLink exact to={`/blogs/${cleanSlug(nextTitle)}/${next}`}>
          <Button icon={<RightCircleOutlined />}>Next</Button>
        </NavLink>
      )}
    </div>
  );
}
