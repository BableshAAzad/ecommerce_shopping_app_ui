import LogoutComp from "../auth/LogoutComp";
import SuperCoinZone from "../navbarpage/SuperCoinZone";
import ProfilePage from "../user/ProfilePage";

export const ProtectedC = [
    {
        comp: <ProfilePage />,
        urlC: "profilePage"
    },

    {
        comp: <LogoutComp />,
        urlC: "logout"
    },

    {
        comp: <SuperCoinZone />,
        urlC: "superCoin-zone"
    },

]