"use client";
import React, { memo } from "react";
import useTradingViewWidget from "./useTradingViewWidget";

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className = "",
}) => {
  const containerRef = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div
      ref={containerRef}
      className={`tradingview-widget-container ${className}`}
      style={{ width: "100%", height: `${height}px` }}
      aria-label={title}
    />
  );
};

export default memo(TradingViewWidget);
