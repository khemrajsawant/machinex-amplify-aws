import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constant";
import { useSelector } from "react-redux";
const ResponsiveAppBar = (props) => {
    const [time, setTime] = React.useState("");
    let pages;
    if (props.guest === true) {
        pages = ["Home"];
    }
    else {
        pages = useSelector((state) => state.master.AUTH_DATA.ROUTES.label
            ? state.master.AUTH_DATA.ROUTES.label[0]
            : ["Home"]);
    }
    const buttonTitle = props.isAuthenticatedUser ? "Logout" : "Login";
    React.useEffect(() => {
        const interval = setInterval(() => setTime(new Date().toLocaleString()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    const userName = useSelector((state) => state.master.AUTH_DATA.userData
        ? state.master.AUTH_DATA.userData.userName
        : "");
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleOpenModalClick = (e) => {
        e.preventDefault();
        props.onLoginModalOpen(buttonTitle);
        if (buttonTitle === "Logout") {
            // props.onLogout(false);
        }
    };
    return (_jsx(AppBar, { sx: { backgroundColor: "#2a5fa6" }, children: _jsx(Container, { maxWidth: "xl", children: _jsxs(Toolbar, { disableGutters: true, children: [_jsx(AdbIcon, { sx: { display: { xs: "none", md: "flex" }, mr: 1 } }), _jsx(Typography, { variant: "h6", noWrap: true, sx: {
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }, children: _jsx(Link, { style: { textDecoration: "none", color: "white" }, to: "/", children: APP_NAME }) }), _jsx(Box, { sx: {
                            border: 1,
                            color: "#d7d9da",
                            marginTop: "1.6rem",
                            marginBottom: "1.6rem",
                            marginRight: "0.4rem",
                            width: "0.05%",
                            height: "",
                        }, children: _jsx("span", { style: { color: "#2a5fa6" }, children: "!" }) }), _jsxs(Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [_jsx(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit", children: _jsx(MenuIcon, {}) }), _jsx(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left",
                                }, keepMounted: true, transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                    display: { xs: "block", md: "none" },
                                }, children: pages.map((page) => (_jsx(MenuItem, { onClick: handleCloseNavMenu, children: _jsx(Typography, { textAlign: "center", children: _jsx(Link, { style: { textDecoration: "none", color: "black" }, to: `/${page}`, children: page }) }) }, page))) })] }), _jsx(AdbIcon, { sx: { display: { xs: "flex", md: "none" }, mr: 1 } }), _jsx(Typography, { variant: "h5", noWrap: true, sx: {
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }, children: _jsx(Link, { style: { textDecoration: "none", color: "white" }, to: `/`, children: APP_NAME }) }), _jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: pages.map((page) => (_jsx(Button, { onClick: handleCloseNavMenu, sx: { my: 2, color: "white", display: "block" }, children: _jsx(Typography, { textAlign: "center", children: _jsx(Link, { style: { textDecoration: "none", color: "#d7d9da" }, to: `/${page}`, children: page }) }) }, page))) }), _jsx(Box, { sx: { flexGrow: 0, px: "10rem", color: "#d7d9da" }, children: time }), _jsx(Box, { sx: { flexGrow: 0, color: "#d7d9da" }, children: userName }), _jsx(Button, { onClick: handleOpenModalClick, color: "inherit", children: buttonTitle })] }) }) }));
};
export default ResponsiveAppBar;
