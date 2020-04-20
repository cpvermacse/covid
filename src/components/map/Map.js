import React from "react";
import india from "../../../public/map/india.json";

function Map() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <ChoroplethMap data={india} />
    </div>
  );
}

export default Map;
