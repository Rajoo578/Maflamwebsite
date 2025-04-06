import React, { useContext, useEffect } from "react";
import {Login } from "../../Component";
import { LanguageProvider ,
  LoginPageContext,
  LoginPageContextProvider,
} from "../../store";
import
{
  useScrollToTopWithDelay
} from "../../hooks"

const LoginPage = () => {
  const { loginPageContexttDetails, loading, error } =
    useContext(LoginPageContext);
    useScrollToTopWithDelay(500);
  // useEffect(() => {
  //   if (loginPageContexttDetails) {
  //     console.log("Login Screen Details:", loginPageContexttDetails);

  //   }
  // }, [loginPageContexttDetails]);
  return (
    <div>
      <LanguageProvider>
        <LoginPageContextProvider>
          <Login></Login>
        </LoginPageContextProvider>
      </LanguageProvider>
    </div>
  );
};

export default LoginPage;
