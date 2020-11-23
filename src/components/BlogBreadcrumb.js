import React from "react";
import { Paper, Breadcrumbs } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

export default function BlogBreadcrumb(props) {
  return (
    <Paper className="breadcrumb-container" elevation={0}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink className="breadcrumb-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="breadcrumb-link" exact to="/blogs">
          Blogs
        </NavLink>
        <p className="breadcrumb-page">{props.page}</p>
      </Breadcrumbs>
    </Paper>
  );
}
