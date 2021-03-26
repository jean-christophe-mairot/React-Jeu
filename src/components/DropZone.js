import React from "react";
import Pices from "./Pices";
const DropZone = () => {
  return (
    <div className="dropzone" id="dropzone-out">
      <div className="dropzone" id="dropzone-in">
        <p>dropzone</p>
      </div>
      <Pices />
    </div>
  );
};

export default DropZone;
