
import { Outlet } from "react-router-dom"
import FooterComp from "../components/footer/FooterComp.jsx"
import HeaderComp from "../components/header/HeaderComp.jsx"


function App() {
  return (
    <div className="dark:bg-slate-900">
      <HeaderComp />
      <div className="pt-16 md:pt-24"></div>
      <Outlet />
      <FooterComp />
    </div>
  )
}

export default App