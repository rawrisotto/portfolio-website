import ProjectDetail from "../components/ProjectDetail";
import { data } from "../../data";

const Projects = () => {
  const projectElements = data.map((project) => {
    return <ProjectDetail key={project.id} project={project} />;
  });

  return (
    <main>
      <section className="section">
        <h2 className="section__title">Projects</h2>
        <div className="projects-container">
          <table className="projects-list">
            <tbody>
              <tr>
                <th>Year</th>
                <th>Name</th>
                <th>Built With</th>
                <th>Source</th>
              </tr>
            </tbody>
            {projectElements}
          </table>
        </div>
      </section>
    </main>
  );
};

export default Projects;
