import { Container, Typography } from "@material-ui/core";
import React from "react";
import { CustomFab } from "../../Pages/HomePage/HomePage.styles";
import { HoverButton } from "../SocialLinks/SocialLinks.styles";
import makeStyles from "./Navbar.styles";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const Navbar = ({ handleClose }) => {
    const classes = makeStyles();
    return (
        <div className={classes.navbar}>
            <Container maxWidth="sm" className={classes.navlist}>
                <HoverButton onClick={handleClose} disableFocusRipple disableRipple>
                    <CloseIcon />
                </HoverButton>
                <Link to="/">
                    <CustomFab onClick={handleClose} variant="extended">
                        Home
                    </CustomFab>
                </Link>
                <Link to="/aboutme">
                    <CustomFab onClick={handleClose} variant="extended">
                        About
                    </CustomFab>
                </Link>
                <Link to="/contact">
                    <CustomFab onClick={handleClose} variant="extended">
                        Contact
                    </CustomFab>
                </Link>
                <CustomFab variant="extended">Portfolio</CustomFab>
            </Container>
        </div>
    );
};

export default Navbar;