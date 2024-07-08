import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/header/Header.jsx"
import HomePage from "../components/navbarpage/HomePage.jsx"
import Registration from "../components/user/Registration.jsx"
import LoginForm from "../components/user/LoginForm.jsx"


function App() {
  return (
    <div className="dark:bg-slate-900">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/loginForm" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
