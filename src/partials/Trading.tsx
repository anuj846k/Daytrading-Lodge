import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "width": "900",
          "height": "500",
          "symbol": "OANDA:XAUUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.innerHTML = "";
      container.current.appendChild(script);
    },
    []
  );
  return (
    <div
      className="tradingview-widget-container hidden md:block border-zinc-400  p-4 border-2 rounded-md"
      ref={container}
    >
      {/* The TradingView widget will be rendered here */}
    </div>
  );
}

export default memo(TradingViewWidget);
