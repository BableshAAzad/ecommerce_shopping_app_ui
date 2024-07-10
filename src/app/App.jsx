
import { Outlet } from "react-router-dom"
import Header from "../components/header/Header.jsx"


function App() {
  return (
    <div className="dark:bg-slate-900">

      <Header />
      <Outlet />

    </div>
  )
}

export default App
