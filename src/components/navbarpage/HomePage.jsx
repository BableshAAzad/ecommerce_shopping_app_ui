// import PopUp from "../popup/PopUp"

import NetworkStatus from "../network/NetworkStatus"

function HomePage() {

    return (
        <div className="h-screen">
            {/* <PopUp bgcolor="blue" msg="Good night"  /> */}
            <NetworkStatus />
            <br /><br />
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application</h1>

        </div>
    )
}
export default HomePage
