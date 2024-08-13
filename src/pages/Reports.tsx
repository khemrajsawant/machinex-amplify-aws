import React, { useRef, useEffect, useState } from "react";
import { Container } from "@mui/material";

interface EmbeddedIframeProps {
  src: string;
}

const EmbeddedIframe: React.FC<EmbeddedIframeProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<{ containerWidth: number; containerHeight: number }>({ containerWidth: 0, containerHeight: 0 });

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

  const iframeStyle: React.CSSProperties = {
    border: "0",
    width: "100%",
    height: "100%",
  };

  return (
    <Container
      ref={containerRef}
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
};

const Reports: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<{ containerWidth: number; containerHeight: number }>({ containerWidth: 0, containerHeight: 0 });

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

  return (
    <Container ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div>
        <h1>Embedded Report</h1>
        <EmbeddedIframe
          src="https://lookerstudio.google.com/embed/reporting/b1b4f3c0-ebce-444e-acb1-d47de7ff641c/page/6zXD"
        />
      </div>
    </Container>
  );
};

export default Reports;
