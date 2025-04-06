// Loader.js
import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({ isLoading, timeout = 5000 }) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, timeout);

      return () => clearTimeout(timer); // Cleanup the timer if unmounted
    }
  }, [isLoading, timeout]);

  if (!showLoader) return null;

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top:"0px",
        left:"0px",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        backgroundColor: "white",
        opacity: 0.99,
      }}
      className="loader"
    >
      <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
    </div>
  );
};

export default Loader;
