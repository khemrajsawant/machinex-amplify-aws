import { jsx as _jsx } from "react/jsx-runtime";
import { Component, createRef } from "react";
import Container from "@mui/material/Container";
class EmbeddedIframe extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "setIframeSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const container = this.containerRef.current;
                if (container) {
                    const containerWidth = container.clientWidth;
                    const containerHeight = container.clientHeight;
                    this.setState({ containerWidth, containerHeight });
                }
            }
        });
        this.containerRef = createRef();
    }
    componentDidMount() {
        this.setIframeSize();
        window.addEventListener("resize", this.setIframeSize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.setIframeSize);
    }
    render() {
        const { src } = this.props;
        const { containerWidth, containerHeight } = this.state || {};
        const iframeStyle = {
            border: "0",
            width: "100%",
            height: "100%",
        };
        return (_jsx(Container, { ref: this.containerRef, style: { height: "100vh", width: "100%" }, children: _jsx("div", { style: { height: "100%", width: "100%" }, children: _jsx("iframe", { src: src, style: iframeStyle, allowFullScreen: true, title: "Embedded Report" }) }) }));
    }
}
export default EmbeddedIframe;
