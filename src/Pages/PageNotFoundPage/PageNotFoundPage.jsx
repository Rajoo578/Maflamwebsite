import React, { useContext, useEffect } from "react";
import { PageNotFound} from '../../Component';
import { LanguageProvider } from '../../store'


function PageNotFoundPage() {

  return (
    <div>
      <LanguageProvider >  
        <PageNotFound />
     </LanguageProvider>
    </div>
  )
}

export default PageNotFoundPage;