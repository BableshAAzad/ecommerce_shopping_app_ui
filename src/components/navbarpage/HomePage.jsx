// import shop from "../../images/shop.jpg"
import { jwtDecode } from "jwt-decode";

function HomePage() {
    console.log(document.cookie.split('; '))
    // console.log(document.cookie)
    // console.log(jwtDecode("eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQ1VTVE9NRVIiLCJzdWIiOiJhYXphZGJhYmxlc2giLCJpYXQiOjE3MjA1NDA3MTYsImV4cCI6MTcyMTgzNjcxNn0.6rUYgSZCkDSd7dkkHqb8d7ejqiNg4AY8tjcj1I0RuPuWTwMGEZZ2pE95QBdfgdkwbb_IZLvVxA708USeTBcZ7w"))
    return (
        <div className="w-full dark:bg-slate-700 h-screen">
            <br /><br />
            {/* <img src={shop} alt="shop" /> */}
            <h1 className="text-center text-2xl dark:text-white">Welcome To Ecommerce Shopping Application</h1>

        </div>
    )
}

export default HomePage

// export function getCookie(name) {
//     const cookies = document.cookie.split('; ');
//     for (let i = 0; i < cookies.length; i++) {
//         const cookiePair = cookies[i].split('=');
//         if (cookiePair[0] === name) {
//             // return jwtDecode(cookiePair[1]);
//             return cookiePair[0]
//         }
//     }
//     return null;
// }
