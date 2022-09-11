import CardProject from "../components/CardProject"
import Container from "../components/Container"
import H1 from "../components/H1"
import projectsTable from "../tables/Projects"

const Projects = () => {
  return(
    <Container>
      <H1>Projects</H1>
      <section className="flex flex-col items-center sm:justify-center sm:flex-row sm:flex-wrap">
        {projectsTable.map(projectItem => {
          return <CardProject key={projectItem.name} project={projectItem} />
        })}
      </section>
    </Container>
  )
}

export default Projects