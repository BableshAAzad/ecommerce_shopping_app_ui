import { Alert } from "flowbite-react";
import { useEffect } from "react";
import { HiInformationCircle } from "react-icons/hi";

function PopupWarn({ clr, head, msg, isOpen, setIsOpen }) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 60000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, setIsOpen]);

    return (
        <>
            {isOpen && (
                <Alert
                    className={`w-2/3 ml-auto mr-auto mt-4`}
                    icon={HiInformationCircle}
                    color={clr}
                    onDismiss={() => setIsOpen(false)}
                    withBorderAccent
                >
                    <span className="font-medium">{head}</span> {msg}
                </Alert>
            )}
        </>
    );
}

export default PopupWarn;
