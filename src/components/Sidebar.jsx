import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div>
      <Link to="/"> Dashboard</Link>
      <Link to="/projects"> Projects</Link>
      <Link to="/settings">
        Settings
      </Link>
    </div>
  )
}

export default Sidebar
