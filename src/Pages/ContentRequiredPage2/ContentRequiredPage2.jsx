import React, { useContext, useEffect } from "react";
import { ContentRequired} from "../../Component";

import { LanguageProvider } from "../../store"

import
{
  useScrollToTopWithDelay
} from  '../../hooks'
import ContentRequired2 from "../../Component/ContentRequired2/ContentRequired2";
function ContentRequiredPage2() {
  useScrollToTopWithDelay(800);
  return (
    <div>
      <LanguageProvider >
        <ContentRequired2 />
     </LanguageProvider>
    </div>
  )
}

export default ContentRequiredPage2;