import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(),
      title,
      description,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;