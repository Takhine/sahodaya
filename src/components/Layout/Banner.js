import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <NavLink className="banner" exact to="/national-sahodaya-conference-2023">
            Register for 29th NSC-23
        </NavLink>
    );
};

Banner.displayName = "Banner";

export default Banner;