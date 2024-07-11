import { Alert } from "flowbite-react"
import { HiInformationCircle } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

function PopupWarn({ clr, url, head, msg }) {
    let navigate = useNavigate()
    return (
        <Alert className={`w-2/3 ml-auto mr-auto mt-4`} icon={HiInformationCircle} color={clr} onDismiss={() => navigate(url)} withBorderAccent>
            <span className="font-medium">{head}</span> {msg}
        </Alert>
    )
}

export default PopupWarn
