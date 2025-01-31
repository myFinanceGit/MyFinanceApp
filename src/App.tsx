import "./App.css"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StrictMode } from "react"


// TODO: Simplify App Component
const App = () => {
  return (
    <div className="App">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  )
}

export default App
