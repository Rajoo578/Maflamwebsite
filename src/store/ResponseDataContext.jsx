import React, { createContext, useContext, useState } from "react";

const ResponseDataContext = createContext();

export const ResponseDataProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  return (
    <ResponseDataContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </ResponseDataContext.Provider>
  );
};

export const useResponseData = () => useContext(ResponseDataContext);
