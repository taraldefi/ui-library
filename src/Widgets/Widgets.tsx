// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { StatusWidgetProps } from "./Widgets.types";

import "./Widgets.scss";

const colorHash = {
  active: {
    bgcolor: "#D1FAE5",
    color: "#059669",
  },
  change: {
    bgcolor: "#FEE2E2",
    color: "#EF4444",
  },
  review: {
    bgcolor: "#FEF3C7",
    color: "#F59E0B",
  },
  completed: {
    bgcolor: "#10B981",
    color: "#ECFDF5",
  },
};

function StatusWidget({ type, icon, showIcon }: StatusWidgetProps) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    switch (type.toLowerCase()) {
      case "up":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.active.bgcolor,
          color: colorHash.active.color,
        });
        break;
      case "down":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.change.bgcolor,
          color: colorHash.change.color,
        });
        break;
      case "change" || "not sent":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.change.bgcolor,
          color: colorHash.change.color,
        });
        break;
      case "review":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.review.bgcolor,
          color: colorHash.review.color,
        });
        break;
      case "completed":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.completed.bgcolor,
          color: colorHash.completed.color,
        });
        break;

      default:
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.active.bgcolor,
          color: colorHash.active.color,
        });
        break;
    }
  }, [type]);

  return (
    <div className="status" style={style}>
      {showIcon ? icon : ""}
      {type}
    </div>
  );
}

export default StatusWidget;
