import { useState } from "react"
import "../styles/project.css";
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
  const [editingProject , setEditingProject] = useState(null)
  const [editName , seteditName] = useState("")
  const [editStatus , seteditStatus] = useState("in-progress")
  return (
    <div className="projects-page">

      <button onClick={() => setShowForm(true)}> Add Project </button>
      {showForm && (
        <div > 
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
      <div className="project-grid">
          {projects.map((project)=>{
            return (
              <div className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.status}</p>
                <button onClick={() => {
                  const updatedArray = projects.filter((item) => {
                    return item.name !== project.name 
                  })

                  setProjects(updatedArray);

                }}>Delete</button>
                <button onClick={() => {
                  setEditingProject(project)
                  seteditName(project.name)
                  seteditStatus(project.status)
                }}>Edit</button>
                {editingProject?.name === project.name && (
                  <div>
                    <h3>Edit project</h3>
                    <input 
                  value = {editName}
                    onChange={(e) => seteditName(e.target.value)}
                    />
                    <select value = {editStatus} onChange={(e) => seteditStatus(e.target.value)}>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                    <button onClick={()=>{
                      const updatedProjects = projects.map((project) => {
                        if (editingProject?.name === project.name){
                          return {
                            name : editName , status : editStatus
                          }
                        }
                        return project 
                      })
                      setProjects(updatedProjects)
                      setEdidtingProject(null)
                    }}>Save</button>

                    <button onClick={(e) => setEdidtingProject(null)}>Cancel
                    </button>
                  </div>
                )}
              </div>
            )
          })}

      </div>
      
      
    </div>
  )
}

export default Projects
