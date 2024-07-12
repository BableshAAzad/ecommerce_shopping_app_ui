import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function BecomeASeller() {
    return (
        <div className="text-center h-screen">
            <h1 className="font-bold text-2xl mb-10 dark:text-white">Become a Seller</h1>

            <Link to="/seller-registration" className="bg-blue-600 w-fit ml-auto mr-auto text-white rounded p-3">
                Register Now
                <FontAwesomeIcon className="ml-3 m-auto" icon={faArrowRight} />
            </Link>
            <br /><br /><br />
            <Link to="/profile-page" className="bg-blue-600 w-fit ml-auto mr-auto text-white rounded p-3">
                Profile Page
                <FontAwesomeIcon className="ml-3 m-auto" icon={faArrowRight} />
            </Link>
        </div>
    )
}

export default BecomeASeller
