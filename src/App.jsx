import { Routes , Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Settings from "./pages/Settings"
import Sidebar from "./components/Sidebar"
const App = () => {
  return (
    <div className="app">

    <Sidebar /> // 
    <main>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </main>    
    </div>
    
  )
}

export default App
