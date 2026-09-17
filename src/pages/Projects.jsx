import { useState } from "react"
const Projects = () => {

  const [projects , setProjects] = useState([
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
    }
  ])
  const [showForm , setShowForm] = useState(false)
  const [projectName , setProjectName] = useState("")
  const [projectStatus , setprojectStatus] = useState("in-progress")
  const [editingProject , setEdidtingProject] = useState(null)
  return (
    <div>

      <button onClick={() => setShowForm(true)}> Add Project </button>
      {showForm && (
        <div> 
          <h2>Add New Project</h2>
          <input type="text" 
          placeholder="Enter Project name"
          value ={projectName} 
          onChange={(e) => setProjectName(e.target.value)}
           />
           <select value={projectStatus} onChange={(e)=> setprojectStatus(e.target.value)}>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
           </select>
          <button onClick={() => {
            if (projectName.trim() === "") {
              return 
            }
            setProjects([...projects , 
              {
                name : projectName,
                status : projectStatus
            }])
            setProjectName("");
          }}>Add</button>
        </div>
      )}
      <div className="stats">
        <div className="stat-card">
          {projects.map((project)=>{
            return (
              <div key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.status}</p>
                <button onClick={() => {
                  const updatedArray = projects.filter((item) => {
                    return item.name !== project.name 
                  })

                  setProjects(updatedArray);

                }}>Delete</button>
                <button onClick={() => {
                  setEdidtingProject(project)
                }}>Edit</button>
                {editingProject && (
                  <div>
                    <h3>Edit project</h3>
                  </div>
                )
                }
              </div>
            )
          })}
        </div>
      </div>
      
      
    </div>
  )
}

export default Projects
