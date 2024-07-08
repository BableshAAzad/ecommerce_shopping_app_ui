import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/header/Header.jsx"
import HomePage from "../components/navbarpage/HomePage.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/"  element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
