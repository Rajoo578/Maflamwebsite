import React from 'react'
import { FailureMessage } from '../../Component';

import { LanguageProvider } from "../../store";  // Importing from store/index.js


export default function FalioursMassagePage() {
  return (
    <div>
        <LanguageProvider>
            <FailureMessage></FailureMessage>
        </LanguageProvider>
    </div>
  )
}
