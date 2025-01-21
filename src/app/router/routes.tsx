import type { RouteObject } from "react-router-dom"

export const BASE_PATH = "/"

/* 
    This component wraps around every page in our application,
    good component for navigation bar
 */
const AppLayout = () => {
  return <div>App Layout</div> // TODO: Replace div with real app layout
}

const LAYOUT_ROUTE = {
  path: BASE_PATH,
  element: <AppLayout />,
  id: "layout-route",
  children: [], // TODO: Route subpages
}

const routes = [LAYOUT_ROUTE] satisfies RouteObject[]

export default routes
