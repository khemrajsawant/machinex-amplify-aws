import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import { Authenticator } from '@aws-amplify/ui-react';
import outputs from "../../amplify_outputs.json";
import { updateAuthData } from "../redux/tableStateGenForm/master/masterReducer";
import { useAppDispatch } from "../redux/tableStateGenForm/store";
Amplify.configure(outputs);
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
const Login = ({ open, handleKeyDown, onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const handleLoginClick = async () => {
        setLoading(true);
        setEmail("");
        setPassword("");
        try {
            console.log("Triggering onLogin with ", email, " and ", password, "loading", loading);
            onLogin(email, password);
            dispatch(updateAuthData({ payload: [
                    ["home", "master", "transactions", "reports"],
                    {
                        ROLE: "Admin",
                        MASTERS: [
                            "Company_Information",
                            "Employee_Master",
                            "Account_Master",
                            "Item_Master",
                            "Workstation_Master",
                            "Machine_Master",
                            "General_Work_List",
                        ],
                        TRANSACTIONS: [
                            "Work_Order",
                            "Daily_Work_Report",
                            "Job_Work_Order",
                            "Job_Work_Receipt",
                            "Sale_Challan",
                            "Payment",
                            "Rejection",
                        ],
                        REPORTS: [""],
                    },
                    true,
                    {
                        isRegistered: true,
                        email: "khemrajsawantmorye@gmail.com",
                        isAuthenticated: true,
                    },
                ], headerName: "ROUTES", labelName: "label" }));
        }
        catch (error) {
            console.error("Authentication error:", error);
        }
        finally {
            setLoading(false);
        }
    };
    const onClose = () => {
        setLoading(false);
    };
    const setHandleKey = (e) => {
        if (e.key === "Escape") {
            handleKeyDown();
        }
    };
    return (_jsx(Modal, { open: open, onClose: onClose, onKeyDown: setHandleKey, children: _jsx(Container, { component: "main", maxWidth: "xs", style: { marginTop: "50vh", transform: "translateY(-50%)" }, children: _jsx(Authenticator, { children: ({ signOut, user }) => (_jsxs("main", { children: [_jsxs("h1", { children: ["Hello ", user?.signInDetails?.loginId] }), _jsx(Button, { variant: "contained", onClick: handleLoginClick, children: "Welcome to Machined, Click to proceed" }), _jsx("button", { onClick: signOut, children: "Sign out" })] })) }) }) }));
};
export default Login;
