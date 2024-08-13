import React, { Component, createRef } from "react";
import Container from "@mui/material/Container";

class EmbeddedIframe extends Component {
  constructor(props) {
    super(props);
    this.containerRef = createRef();
  }

  componentDidMount() {
    this.setIframeSize();
    window.addEventListener("resize", this.setIframeSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setIframeSize);
  }

  setIframeSize = () => {
    const container = this.containerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      this.setState({ containerWidth, containerHeight });
    }
  };

  render() {
    const { src } = this.props;
    const { containerWidth, containerHeight } = this.state || {};

    const iframeStyle = {
      border: "0",
      width: "100%",
      height: "100%",
    };

    return (
      <Container
        ref={this.containerRef}
        style={{ height: "100vh", width: "100%" }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <iframe
            src={src}
            style={iframeStyle}
            allowFullScreen
            title="Embedded Report"
          ></iframe>
        </div>
      </Container>
    );
  }
}

export default EmbeddedIframe;
