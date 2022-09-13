import { useParams } from "react-router-dom";
import Container from "../components/Container";
import H1 from "../components/H1";
import ProjectImage from "../components/ProjectImage";
import projectsTable from "../tables/Projects";
import Button from "../components/Button";
import { useState } from "react";

const Project = () => {
  const params = useParams();
  const { slug } = params;
  const [view, setView] = useState(false);
  const project = projectsTable.find(
    (projectItem) => projectItem.slug === slug
  );

  const viewImages = () => {
    if (view) {
      setView(false);
    } else {
      setView(true);
    }
  };

  return (
    <Container>
      <H1 className="text-gray-300 mb-0">{project.name}</H1>
      <section className="flex flex-row gap-1 mt-2 mb-4 flex-wrap">
        {project.languages.map((language, i) => {
          return (
            <small
              key={i}
              className=" px-2 border rounded border-gray-400 text-gray-400"
            >
              {language}
            </small>
          );
        })}
      </section>
      <section className="flex sm:flex-row flex-col gap-10 sm:gap-0">
        <div className="sm:w-[50%] sm:pe-20 sm:h-[500px] sm:pr-3">
          <p className="sm:min-h-[250px] min-h-[150px] text-gray-300 first-letter:uppercase">
            {project.description}
          </p>
          {project.projectLink && (
            <div className="sm:mt-10 mt-5">
              <a href={project.projectLink} target="_blank">
                <Button
                  buttonText="Checkout the project"
                  className={"text-gray-400 hover:text-gray-300"}
                />
              </a>
            </div>
          )}
        </div>
        <div
          className={`sm:w-[60%] sm:overflow-y-scroll project-images sm:max-h-[450px] cursor-pointer ${
            view &&
            "sm:scale-150 sm:absolute sm:top-[50%] sm:translate-y-[-40%] sm:left-[50%] sm:translate-x-[-50%] "
          }`}
          onClick={viewImages}
        >
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
