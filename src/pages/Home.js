import Container from "../components/Container";
import H1 from "../components/H1";
import cricketImage from "../assets/cricket.png";
import H3 from "../components/H3";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <section className="py-10 ">
        <H1 className={"text-gray-300"}>
          Hello! I'm Dushen,
          <br /> a Junior web developer in Paris.
        </H1>
      </section>
      <section className="relative py-10">
        <H3 className={"text-zinc-900 mb-5"}>Background</H3>
        <p className="text-gray-400 sm:max-w-[50%]">
          I'm Dushen, currently a student studying fullstack web developing at
          Konexio in Paris. I've done my advanced level examinations in Sri
          lanka and moved to France in 2019. Since then i've studied web
          developing in my leasure time and i found it very interesting. So I
          kept learning more & more. Apart from that I'm a good cricketer.
          <img
            src={cricketImage}
            alt="cricket"
            className="w-10 inline-block align-middle"
          />
        </p>
        <div className="sm:absolute sm:right-0 sm:w-[50%] border-2 border-black sm:h-[100%] sm:top-10">
          <H3 className="sm:absolute sm:top-[45%] sm:transform-y-[-50%] sm:left-[50%] sm:translate-x-[-50%]">
            Skills
          </H3>
        </div>
      </section>
      <div className="py-10">
        <Link to="/projects">
          <Button buttonText={"checkout my projects"} className="sm:w-[50%]" />
        </Link>
      </div>
    </Container>
  );
};

export default Home;
