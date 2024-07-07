import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/header/Header"
import HomePage from "../components/header/HomePage"


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
