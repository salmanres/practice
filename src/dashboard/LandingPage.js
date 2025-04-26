import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function LandingPage() {
    return (
        <Fragment>
            <NavigationBar />
            <Outlet />
        </Fragment>
    )
};

export default LandingPage;