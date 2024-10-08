import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { title } from "../utils/cardsMetaData";
const CardComponentTile = (props) => {
    const routeText = title[props.title];
    if (props.type === "button") {
        return (_jsx(Button, { variant: "outlined", children: _jsx(Link, { to: `/${props.page}/${props.title}`, relative: "path", children: _jsx(Typography, { variant: "h5", component: "div", children: props.title }) }) }));
    }
    else if (props.type === "card") {
        return (_jsxs(Card, { sx: [
                { width: "15rem" },
                { height: "5rem" },
                { backgroundColor: "#f5f5f5" },
                { transition: "background 0s, color 1s" },
                {
                    "&:hover": {
                        backgroundColor: "#f5f5f5",
                        padding: "0px",
                        boxShadow: "0px 10px #f5f5f5",
                    },
                },
                { padding: "10px" },
                { boxShadow: "5px 10px #f3e5f5" },
            ], children: [_jsx(Box, { sx: [
                        { minWidth: "10rem" },
                        { height: "1rem" },
                        { backgroundColor: "#2a5fa6" },
                    ], display: "flex", flexDirection: "row", children: _jsxs(ButtonGroup, { style: { marginLeft: "8rem" }, children: [_jsx(Button, { sx: [
                                    { color: "grey" },
                                    {
                                        "&:hover": {
                                            backgroundColor: "#f3e5f5",
                                            color: "grey",
                                        },
                                    },
                                ], children: _jsx(EditIcon, { sx: [
                                        { color: "white" },
                                        {
                                            "&:hover": {
                                                backgroundColor: "#f3e5f5",
                                                color: "grey",
                                                borderRadius: "2px",
                                            },
                                        },
                                        { height: "0.8rem" },
                                    ] }) }), _jsx(Button, { sx: [
                                    { color: "grey" },
                                    {
                                        "&:hover": {
                                            backgroundColor: "#f3e5f5",
                                            color: "grey",
                                        },
                                    },
                                ], children: _jsx(VisibilityIcon, { sx: [
                                        { color: "white" },
                                        {
                                            "&:hover": {
                                                backgroundColor: "#f3e5f5",
                                                color: "grey",
                                                borderRadius: "2px",
                                            },
                                        },
                                        { height: "0.8rem" },
                                    ] }) })] }) }), _jsx(Box, { sx: [{ minWidth: "10rem" }, { height: "3rem" }], display: "flex", justifyContent: "center", alignItems: "center", children: _jsx(Stack, { direction: "row", spacing: 1, children: _jsx(Link, { to: `/${props.page}/${routeText}`, relative: "path", style: { textDecoration: "none" }, children: _jsx(Typography, { sx: {
                                    fontWeight: 600,
                                    m: 0.1,
                                    fontSize: "1rem",
                                    p: 1,
                                    borderRadius: "0.5rem",
                                    backgroundColor: "#e0f2f1",
                                    width: "100%",
                                    textTransform: "capitalize",
                                }, children: props.title.replace(/_/g, " ") }) }) }) })] }));
    }
    return null;
};
export default CardComponentTile;
