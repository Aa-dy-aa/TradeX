"use client";
import { useEffect, useRef } from "react";

const useTradingViewWidget = (scriptUrl, config, height = 600) => {
  const containerRef = useRef(null);

  useEffect(() => {
     if (!containerRef.current) return;

    containerRef.current.innerHTML = `
      <div class="tradingview-widget-container" style="width: 100%; height: ${height}px;"></div>
    `;

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.firstChild.appendChild(script);
  }, []);

  return containerRef;
};

export default useTradingViewWidget;
