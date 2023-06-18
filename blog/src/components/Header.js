import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active, setActive, user, handleLogout }) => {
    const userId = user ? user.uid : null;

    return ( <
        nav className = "navbar navbar-expand-lg navbar-light bg-light" >
        <
        div className = "container padding-media" >
        <
        button className = "navbar-toggler mt-3"
        type = "button"
        data - bs - toggle = "collapse"
        data - bs - target = "#navbarSupportedContent"
        aria - controls = "navbarSupportedContent"
        aria - expanded = "true"
        aria - label = "Toggle Navigation" >
        <
        span className = "fa fa-bars" > < /span> <
        /button> <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
        <
        li className = { `nav-item ${active === "home" ? "active" : ""}` } >
        <
        Link to = "/"
        className = "nav-link"
        onClick = {
            () => setActive("home") } >
        Home <
        /Link> <
        /li> <
        li className = { `nav-item ${active === "blogs" ? "active" : ""}` } >
        <
        Link to = "/blogs"
        className = "nav-link"
        onClick = {
            () => setActive("blogs") } >
        Blogs <
        /Link> <
        /li> <
        li className = { `nav-item ${active === "create" ? "active" : ""}` } >
        <
        Link to = "/create"
        className = "nav-link"
        onClick = {
            () => setActive("create") } >
        Create <
        /Link> <
        /li> <
        li className = { `nav-item ${active === "about" ? "active" : ""}` } >
        <
        Link to = "/about"
        className = "nav-link"
        onClick = {
            () => setActive("about") } >
        About <
        /Link> <
        /li> <
        /ul> <
        div className = "row" >
        <
        ul className = "navbar-nav ml-auto" > {
            userId ? ( <
                >
                <
                div className = "profile" >
                <
                img src = "https://png.flaticon.com/512/149/149071.png"
                alt = "logo"
                style = {
                    {
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginTop: "12px",
                        marginLeft: "5px",
                    }
                }
                /> <
                p style = {
                    { marginTop: "12px", marginLeft: "5px" } } > { user.displayName } <
                /p> <
                /div> <
                li className = "nav-item nav-link"
                onClick = { handleLogout } >
                Logout <
                /li> <
                />
            ) : ( <
                Link to = "/auth"
                style = {
                    { textDecoration: "none" } } >
                <
                li className = { `nav-item nav-link ${
                      active === "login" ? "active" : ""
                    }` }
                onClick = {
                    () => setActive("login") } >
                Login <
                /li> <
                /Link>
            )
        } <
        /ul> <
        /div> <
        /div> <
        /div> <
        /nav>
    );
};

export default Header;