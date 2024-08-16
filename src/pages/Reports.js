import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { Container } from "@mui/material";
const EmbeddedIframe = ({ src }) => {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ containerWidth: 0, containerHeight: 0 });
    useEffect(() => {
        function setIframeSize() {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;
                setContainerSize({ containerWidth, containerHeight });
            }
        }
        setIframeSize(); // Initial size setting
        window.addEventListener("resize", setIframeSize);
        return () => {
            window.removeEventListener("resize", setIframeSize);
        };
    }, []);
    const iframeStyle = {
        border: "0",
        width: "100%",
        height: "100%",
    };
    return (_jsx(Container, { ref: containerRef, style: { height: "100vh", width: "100%" }, children: _jsx("div", { style: { height: "100%", width: "100%" }, children: _jsx("iframe", { src: src, style: iframeStyle, allowFullScreen: true, title: "Embedded Report" }) }) }));
};
const Reports = () => {
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ containerWidth: 0, containerHeight: 0 });
    useEffect(() => {
        function setIframeSize() {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;
                setContainerSize({ containerWidth, containerHeight });
            }
        }
        setIframeSize(); // Initial size setting
        window.addEventListener("resize", setIframeSize);
        return () => {
            window.removeEventListener("resize", setIframeSize);
        };
    }, []);
    return (_jsx(Container, { ref: containerRef, style: { height: '100%', width: '100%' }, children: _jsxs("div", { children: [_jsx("h1", { children: "Embedded Report" }), _jsx(EmbeddedIframe, { src: "https://lookerstudio.google.com/embed/reporting/b1b4f3c0-ebce-444e-acb1-d47de7ff641c/page/6zXD" })] }) }));
};
export default Reports;
