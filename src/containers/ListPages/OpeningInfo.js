import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { APP_NAME } from "../../utils/constant";
// components
const OpeningInfo = () => {
    return (_jsx(Container, { maxWidth: "xl", sx: [
            { marginTop: (theme) => theme.spacing(8) },
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
            // { background: "#90caf9" },
        ], children: _jsx(Stack, { sx: [
            // { border: 1 },
            // { borderLeft: 1 },
            // { borderRight: 1 },
            // { borderColor: "primary.main" },
            ], children: _jsx(Stack, { sx: [
                    { border: 1 },
                    { padding: "1rem" },
                    { borderRadius: 3 },
                    // { borderRight: 1 },
                    // { background: (theme) =>'#e3f2fd' },
                    {
                        borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
                    },
                ], children: _jsxs(Stack, { sx: [
                    // { border: 1 },
                    // { borderLeft: 1 },
                    // { borderRight: 1 },
                    // { borderColor: "primary.main" },
                    // { background: "#90caf9" },
                    ], children: [_jsx(Box, { order: 20, display: "flex", justifyContent: "center", alignItems: "center", sx: { marginLeft: "1rem" }, children: _jsx(Typography, { variant: "h5", sx: [
                                    { display: "flex" },
                                    { justifyContent: "center" },
                                    { alignItems: "center" },
                                    { marginBottom: "1rem" }
                                ], children: _jsxs("b", { children: ["Welcome to ", `${APP_NAME}`, " 1.0"] }) }) }), _jsxs(Stack, { order: 20, display: "flex", justifyContent: "center", alignItems: "center", sx: { marginLeft: "1rem" }, children: [_jsx(Typography, { variant: "body2", gutterBottom: true, children: "Revolutionizing Machine Shop Management" }), _jsx(Typography, { variant: "body2", gutterBottom: true, children: "Precision. Productivity. Profits." })] }), _jsxs(Stack, { order: 20, display: "flex", sx: [
                                { marginLeft: "1rem" },
                                { marginTop: "2rem" },
                                { marginBottom: "2rem" },
                            ], children: [_jsx("b", { children: "Overview: " }), _jsx("section", { style: { marginBottom: "2rem" }, children: _jsx(Typography, { variant: "body2", sx: [
                                            { marginLeft: "1rem" },
                                            { marginTop: "1rem" },
                                            { marginBottom: "2rem" },
                                        ], children: "Machinex is an innovative software solution designed to transform the way machine shops operate. This comprehensive tool integrates cutting-edge technology to optimize every aspect of machine and worker performance, streamlining operations, enhancing productivity, and maximizing profits. With Machinex, you'll unlock a new era of efficiency and control in your machine shop." }) }), _jsx("b", { children: "Key Features: " }), _jsx("section", { style: { marginBottom: "2rem" }, children: _jsxs(List, { sx: { listStyle: "decimal", pl: 4 }, children: [_jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Efficiency Evaluation: " }), " Machinex provides real-time monitoring and analysis of each machine's performance, ensuring optimal usage and minimizing downtime. The software offers insights into equipment utilization, maintenance needs, and production bottlenecks."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Worker Performance Tracking: " }), "Gain visibility into individual worker productivity and skill levels. Machinex enables you to assess worker efficiency, assign tasks based on expertise, and identify training needs."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: " Automated Salary Calculation: " }), "Simplify payroll management with Machinex's integrated salary module. It automatically calculates worker wages based on their tasks, hours worked, and skill levels, reducing administrative overhead."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Mandate Management: " }), " Keep your shop aligned with production mandates effortlessly. Machinex offers a centralized platform to assign, track, and manage work mandates, ensuring timely execution and adherence to customer requirements."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Quotation Generation: " }), " Create accurate and competitive quotations with ease. Machinex analyzes historical data and production costs to help you generate quotes that balance profitability and customer expectations."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Work Validation: " }), " Verify customer-provided work rates against your internal benchmarks using Machinex. Ensure that the quoted rates align with your operational costs and profitability targets."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Data-Driven Insights: " }), " Leverage Machinex's advanced analytics to make informed decisions. The software provides actionable insights into production trends, worker performance, machine utilization, and more, empowering you to optimize processes continually."] }) })] }) }), _jsx("b", { children: "Benefits: " }), _jsx("section", { style: { marginBottom: "2rem" }, children: _jsxs(List, { sx: { listStyle: "decimal", pl: 4 }, children: [_jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Precision: " }), " Achieve precision and accuracy in every aspect of your operations. Machinex's data-driven approach minimizes errors and inconsistencies, ensuring high-quality outputs."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Productivity: " }), "Seamlessly increase productivity by identifying operational bottlenecks, optimizing workflows, and maximizing resource utilization. Enhanced worker performance tracking leads to improved overall output."] }) }), _jsx(ListItem, { sx: { display: "list-item" }, children: _jsxs(Typography, { variant: "body2", sx: [
                                                    // { marginTop: "1rem" },
                                                    // { marginBottom: "2rem" },
                                                    ], children: [_jsx("b", { children: "Profits: " }), " Experience a significant boost in profits through efficient resource allocation, reduced downtime, optimized pricing strategies, and streamlined operations."] }) })] }) }), _jsx("b", { children: "Conclusion: " }), _jsx("section", { children: _jsx(List, { sx: { listStyle: "decimal", pl: 4 }, children: _jsx(ListItem, { sx: { display: "list-item" }, children: _jsx(Typography, { variant: "body2", sx: [
                                                // { marginTop: "1rem" },
                                                // { marginBottom: "2rem" },
                                                ], children: "Machinex is more than just a software; it's a strategic partner that empowers your machine shop with the tools needed to excel in a competitive market. With its comprehensive features and data-driven insights, Machinex is your gateway to achieving unparalleled precision, boosting productivity, and driving higher profits. Embrace the future of machine shop management with Machinex and witness your operations transform like never before." }) }) }) })] })] }) }) }) }));
};
export default OpeningInfo;
