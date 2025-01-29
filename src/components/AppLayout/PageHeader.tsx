import "./css/PageHeader.css"
import { IoMenuOutline } from "react-icons/io5"
import { MdOutlineClose } from "react-icons/md"
import { useState } from "react"

export const PageHeader = () => {
  const [navSheetIsOpen, setNavSheet] = useState(false)

  return (
    <>
      <header className="header">
        <NavigationMenuButton setNavSheet={setNavSheet} />
        <div className="logo">
          <h1>MyFinance</h1>
        </div>
      </header>
      <AppNavigationSheet
        setNavSheet={setNavSheet}
        navSheetIsOpen={navSheetIsOpen}
      />
    </>
  )
}

const NavigationMenuButton = (props: {
  setNavSheet: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const onClick = () => props.setNavSheet(true)
  return (
    <button className={"nav-button"} onClick={onClick}>
      <IoMenuOutline />
    </button>
  )
}

const NavigationCloseButton = (props: {
  setNavSheet: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const onClick = () => props.setNavSheet(false)
  return (
    <div className={"nav-sheet-header"}>
      <button className={"nav-close-button"} onClick={onClick}>
        <MdOutlineClose />
      </button>
    </div>
  )
}

const AppNavigationSheet = (props: {
  setNavSheet: React.Dispatch<React.SetStateAction<boolean>>
  navSheetIsOpen: boolean
}) => {
  return (
    <div className={`nav-sheet ${props.navSheetIsOpen ? "open" : ""}`}>
      <NavigationCloseButton setNavSheet={props.setNavSheet} />
      <nav>
        <ul className="nav-sheet-options">
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/budget">Budget</a>
          </li>
          <li>
            <a href="/dashboards">Dashboards</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
