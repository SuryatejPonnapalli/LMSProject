import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Fees from "./Fees"
import Help from "./Help"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />}/>
      <Route path="fees" element={<Fees />}/>
      <Route path="help" element={<Help />} >
          <Route path="contact" />
      </Route> 
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={routes} />
  )
}

export default App
