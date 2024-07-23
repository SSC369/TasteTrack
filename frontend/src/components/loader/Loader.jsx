import React, { useContext } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./style.scss";
import { ThemeContext } from "../../context/themeContext";

const Loader = () => {
  return (
    <div className="loadingContainer">
      <InfinitySpin
        visible={true}
        width="200"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
