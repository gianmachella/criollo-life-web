import "./CoverLoading.css";

import React from "react";
import loading from "../../images/loadingfj.gif";

const CoverLoading = () => {
  return (
    <div className="loading-container">
      <img src={loading} alt="" />
    </div>
  );
};

export default CoverLoading;
