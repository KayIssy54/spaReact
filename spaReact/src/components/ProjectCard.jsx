function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;