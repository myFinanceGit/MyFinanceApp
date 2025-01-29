import { LoginPage } from "../Login"
import { SignUp } from "../SignUp"
import { useNavigate } from "react-router-dom"
import { Account } from "../Account"

export const PROFILE_ROUTES = {
  children: [
    {
      path: "/account",
      element: <Account />
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ],
}

// TODO: Generalize navigation method to navigate across entire page not just profile
export const useNavigateToProfilePage = () => {
  const navigate = useNavigate()
  return (profilePage: string) => navigate(`../${profilePage}`)
}
