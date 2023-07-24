import React from "react";
import { Paper, Button, Grid } from "@material-ui/core";
import headerBanner from "static/images/westin-header-desktop.jpg";

function Header() {
    return (
        <img className="header-image" src={headerBanner} alt="Header" />
    )
}

export default Header;
