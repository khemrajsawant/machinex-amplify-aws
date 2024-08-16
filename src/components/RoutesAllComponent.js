import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Master from "../pages/Master";
import Transactions from "../pages/Transactions";
import Reports from "../pages/Reports";
export default function RoutesAllComponent() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/master", element: _jsx(Master, {}) }), _jsx(Route, { path: "/transactions", element: _jsx(Transactions, {}) }), _jsx(Route, { path: "/reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "*", element: _jsx(Home, {}) })] }));
}
