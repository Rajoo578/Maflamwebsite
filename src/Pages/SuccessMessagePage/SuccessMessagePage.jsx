
import { LanguageProvider } from '../../store'
import { SuccessMessage } from "../../Component";
export default function SuccessMessagePage() {
  return (
    <div>
        <LanguageProvider>
            <SuccessMessage></SuccessMessage>
        </LanguageProvider>
    </div>
  )
}
