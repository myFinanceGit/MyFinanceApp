import { BudgetDashboardsPage } from "../BudgetDashboardsPage"


export const DASHBOARD_ROUTES = {
  children: [
    {
      path: "/dashboards",
      element: <BudgetDashboardsPage />,
    },
  ],
}
