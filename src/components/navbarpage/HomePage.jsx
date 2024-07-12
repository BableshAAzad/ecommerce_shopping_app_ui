// import PopUp from "../popup/PopUp"

import PopupWarn from "../popup/PopupWarn"

function HomePage() {

    return (
        <div className="h-screen">
            {/* <PopUp bgcolor="blue" msg="Good night"  /> */}
            <PopupWarn clr="red"  head="Welcome" msg="Good Morning" />
            <br /><br />
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application</h1>

        </div>
    )
}
export default HomePage
