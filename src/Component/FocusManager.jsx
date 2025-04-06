import React, { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

const FocusManager = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const firstFocusable = document.querySelector("[data-auto-focus]");
    const activeElement = document.activeElement;

    // Save the last focused element when navigating back (Pop action)
    if (navigationType === "POP") {
      if (activeElement) {
        sessionStorage.setItem("lastFocused", activeElement.id);
        activeElement.focus();
      }
    } else {
      // Focus the first element with data-auto-focus attribute when navigating forward
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }

    // Focus management after back navigation
    const lastFocusedId = sessionStorage.getItem("lastFocused");
    if (lastFocusedId) {
      const lastFocusedElement = document.getElementById(lastFocusedId);
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }
  }, [location, navigationType]);
  console.log(children);
  return children;
};

export default FocusManager;
