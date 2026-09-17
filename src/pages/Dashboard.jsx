import React from "react"
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
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to Devboard</p>

        {/* Total Projects */}
        <div className="stats">
          <div className="stat-card">
            <h3>Total Projects</h3>
            <p>{projects.length}</p>
            {projects.map((project) =>{
              return <div key={project.name}>{project.name}</div>
            })}
          </div>

          {/* In Progress Card  */}
          <div className="stat-card">
            <h3>In Progress</h3>
            <p>{inProgressProjects.length}</p>
            {inProgressProjects.map((project) =>{
              return <div key={project.name}> {project.name} </div>
            })}
          </div>

          {/* Complete Card */}
          <div className="stat-card">
            <h3>Completed</h3>
            <p>{completedProjects.length}</p>
            {completedProjects.map((project)=>{
              return <div key = {project.name}> {project.name} </div>
            })}
          </div>
          
        </div> 
    </div>
  )
}

export default Dashboard