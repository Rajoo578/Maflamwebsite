import React, { useContext, useEffect } from "react";
import { NotSubscribe} from "../../Component";

import { LanguageProvider } from "../../store"

import
{
  useScrollToTopWithDelay
} from  '../../hooks'
function NoSubscriptionPage() {
  useScrollToTopWithDelay(800);
  return (
    <div>
      <LanguageProvider >
        <NotSubscribe />
     </LanguageProvider>
    </div>
  )
}

export default NoSubscriptionPage;