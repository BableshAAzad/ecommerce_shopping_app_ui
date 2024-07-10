
import { Outlet } from "react-router-dom"
import HeaderComp from "../components/header/HeaderComp.jsx"
import FooterComp from "../components/footer/FooterComp.jsx"


function App() {
  return (
    <div className="dark:bg-slate-900">
      <HeaderComp />
      <Outlet />
      <FooterComp/>
    </div>
  )
}

export default App
