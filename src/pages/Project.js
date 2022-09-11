import { useParams } from "react-router-dom";
import Container from "../components/Container";
import H1 from "../components/H1";
import ProjectImage from "../components/ProjectImage";
import projectsTable from "../tables/Projects";
import Button from "../components/Button";
// import "../App.css";

const Project = () => {
  const params = useParams();
  const { slug } = params;
  const project = projectsTable.find(
    (projectItem) => projectItem.slug === slug
  );

  return (
    <Container>
      <H1>{project.name}</H1>
      <section className="flex sm:flex-row flex-col gap-10 sm:gap-0">
        <div className="sm:w-[50%] sm:pe-20 sm:h-[500px] sm:pr-3">
          <p className="sm:min-h-[250px] min-h-[150px] text-gray-300 first-letter:uppercase">
            {project.description}
          </p>
          {project.projectLink && (
            <div className="sm:mt-10 mt-5">
              <a href={project.projectLink} target="_blank">
                <Button buttonText="Checkout the project" />
              </a>
            </div>
          )}
        </div>
        <div className="sm:w-[60%] sm:overflow-y-scroll project-images sm:max-h-[400px]">
          <div className="flex flex-col gap-5">
            {Object.values(project.images).map((image, i) => {
              return (
                <ProjectImage
                  key={i}
                  src={image}
                  alt={`${project.name}-${i}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Project;
