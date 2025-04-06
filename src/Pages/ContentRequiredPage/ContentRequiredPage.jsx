import React, { useContext, useEffect } from "react";
import { ContentRequired} from "../../Component";

import { LanguageProvider } from "../../store"

import
{
  useScrollToTopWithDelay
} from  '../../hooks'
function ContentRequiredPage() {
  useScrollToTopWithDelay(800);
  return (
    <div>
      <LanguageProvider >
        <ContentRequired />
     </LanguageProvider>
    </div>
  )
}

export default ContentRequiredPage;