import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import Fees from "./Fees"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/fees" element={<Fees />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
