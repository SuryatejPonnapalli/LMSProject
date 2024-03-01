import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Fees from "./Fees"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />}/>
      <Route path="fees" element={<Fees />}/>
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={routes} />
  )
}

export default App
