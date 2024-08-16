import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Stack, Box } from "@mui/material";
import CardComponentTile from "../components/CardComponentTile";
import FormHeader from "../components/FormHeader";
import { Copyright } from "../components/Copyright";
import { useSelector } from "react-redux";
function Transactions() {
    const Transactions = useSelector((state) => state.master.AUTH_DATA?.ROUTES?.label[1]?.TRANSACTIONS || []);
    return (_jsxs(Container, { maxWidth: "xl", sx: [
            { border: 1 },
            { padding: "1rem" },
            { borderRadius: 10 },
            {
                borderColor: (theme) => theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
            },
        ], children: [_jsxs(Stack, { spacing: 3, sx: [
                    { marginTop: (theme) => theme.spacing(10) },
                    { height: "100vh" },
                ], children: [_jsx(FormHeader, { headerName: "Transactions", headerkind: "pageheader" }), _jsx(Stack, { direction: "row", spacing: 2, sx: [
                            { marginBottom: "2rem" },
                            { width: "100%" },
                            { border: 0 },
                            { p: 5 },
                            { transition: "background 1s, color 1s" },
                            { "&:hover": { backgroundColor: "#e0f2f1", borderRadius: "15px" } },
                        ], useFlexGap: true, flexWrap: "wrap", justifyContent: "center", alignItems: "center", children: Transactions.map((crd) => (_jsx(Box, { sx: { m: 1 }, children: _jsx(CardComponentTile, { title: crd, page: "transactions", type: "card" }) }, crd))) })] }), _jsx(Copyright, {})] }));
}
export default Transactions;
