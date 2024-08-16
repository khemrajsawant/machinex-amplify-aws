import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import AuthenticatedApp from "./components/AuthenticatedApp";
// import "./index.css";
// import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/tableStateGenForm/store.ts";
import InitData from "./components/InitData.tsx";
Amplify.configure(outputs);
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { children: _jsx(BrowserRouter, { children: _jsxs(Provider, { store: store, children: [_jsx(InitData, {}), _jsx(AuthenticatedApp, {})] }) }) }) }));
