import type { RouteObject } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { PROFILE_ROUTES } from "../../features/profile/routes/Routes"
import { PageHeader } from "../../components/AppLayout/PageHeader"
import { CSV_BUDGET_ROUTES } from "../../features/./budget/routes/Routes"
import { DASHBOARD_ROUTES } from "../../features/dashboards/routes/Routes"

export const BASE_PATH = "/"

/* 
    This component wraps around every page in our application,
    good component for navigation bar
 */
const AppLayout = () => {
  // TODO: Replace div with real app layout
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  )
}

const LAYOUT_ROUTE = {
  path: BASE_PATH,
  element: <AppLayout />,
  id: "layout-route",
  children: [
    PROFILE_ROUTES,
    CSV_BUDGET_ROUTES,
    DASHBOARD_ROUTES
  ],
}

const routes = [LAYOUT_ROUTE] satisfies RouteObject[]

export default routes
