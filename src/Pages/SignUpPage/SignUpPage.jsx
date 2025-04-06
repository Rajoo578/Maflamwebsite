import React, { useContext, useEffect } from "react";
import {SignUp } from "../../Component";
import
{
  useScrollToTopWithDelay
} from  '../../hooks'
import { 
  LanguageProvider,
  SingupPageContext,
  SingupPageContextProvider,
} from "../../store";




const SignUpPage = () => {
  useScrollToTopWithDelay(500);
  // const{ singupPageContextDetails, loading, error } = useContext(SingupPageContext);
  const { singupPageContextDetails, loading, error } =
    useContext(SingupPageContext);

  // useEffect(() => {
  //   if (singupPageContextDetails) {
  //     console.log("Home Screen Details:", singupPageContextDetails);

  //   }

  // }, [singupPageContextDetails]);
  return (
    <div>
      <LanguageProvider>
        <SingupPageContextProvider>
          <SignUp></SignUp>
        </SingupPageContextProvider>
      </LanguageProvider>
    </div>
  );
};

export default SignUpPage;
