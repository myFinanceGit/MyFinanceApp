import { createBrowserRouter } from "react-router-dom"
import routes, { BASE_PATH } from "./app/router/routes"

export const ROUTER_OPTIONS = {
  basename: BASE_PATH,
  future: {
    v7_relativeSplatPath: true,
  },
}

export default createBrowserRouter(routes, ROUTER_OPTIONS)
