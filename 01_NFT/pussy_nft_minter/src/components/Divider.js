import React from "react";

function Divider() {
  return (
    <div style={{ height: "30px", display: "flex", width: "100vw" }}>
      <div
        className="divider"
        style={
          last === "True"
            ? { borderRight: "none", width: "50%" }
            : { borderRight: "1px solid var(--gold)", width: "50%" }
        }
      ></div>
      <div
        className="divider"
        style={
          last === "True"
            ? { borderLeft: "none", width: "50%" }
            : { borderLeft: "1px solid var(--gold)", width: "50%" }
        }
      ></div>
    </div>
  );
}

export default Divider;
