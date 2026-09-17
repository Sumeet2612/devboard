import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <aside>
      <h2>DevBoard</h2>
      <nav>
        <Link to="/"> Dashboard</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/settings">
          Settings
        </Link>
      </nav>
      
    </aside>
  )
}

export default Sidebar
