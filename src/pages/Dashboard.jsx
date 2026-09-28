import React from "react"
import StatCard from "../components/StatCard"
const Dashboard = () => {
  const projects = [
    {
      name : "Learn JavaScript",
      status : "completed"
    },
    {
      name : "Complete CNS",
      status : "completed"
    },
    {
      name : "Learn react",
      status : "in-progress"
    },
    {
      name : "Complete JSX",
      status : "completed"
    }
  ]

  const inProgressProjects = projects.filter((project) => {
    return project.status === "in-progress"
  })
  const completedProjects = projects.filter((project)=>{
    return project.status === "completed"
  })

  return (
    <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Track your Development journey.</p>
        <div className="stats-grid">
          <StatCard title="Total Projects" count={projects.length} /> 
          <StatCard title="In Progress " count={inProgressProjects.length} /> 
          <StatCard title="Completed " count={completedProjects.length} /> 
        </div>
    </div>
  )
}

export default Dashboard