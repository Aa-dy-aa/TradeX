"use client";
import { useEffect, useRef } from "react";

const useTradingViewWidget = (scriptUrl, config, height = 600) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any previous content
    container.innerHTML = "";

    // Create inner div
    const innerDiv = document.createElement("div");
    innerDiv.className = "tradingview-widget-container";
    innerDiv.style.width = "100%";
    innerDiv.style.height = `${height}px`;
    container.appendChild(innerDiv);

    // Create script
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    container.dataset.loaded = "true";
    innerDiv.appendChild(script);

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = "";
        delete container.dataset.loaded;
      }
    };
  }, [scriptUrl, config, height]);

  return containerRef;
};

export default useTradingViewWidget;
