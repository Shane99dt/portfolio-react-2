import Container from "../components/Container";
import H1 from "../components/H1";
import cricketImage from "../assets/cricket.png";
import H3 from "../components/H3";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Skills from "../tables/Skills";

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
        <H3 className={"text-zinc-400 mb-5"}>Background</H3>
        <p className="text-gray-400 sm:max-w-[50%]">
          I'm Dushen, currently a student studying fullstack web developing at
          Konexio in Paris. I've done my advanced level examinations in Sri
          lanka and moved to France in 2019. Since then i've studied web
          developing in my leasure time and i found it very interesting. So I
          kept learning more & more. <br />
          So for the last three months( june - august 2022 ) at Konexio i've
          advanced a lot, where i learnt lots of things.
          <br /> Apart from that I'm a good cricketer.
          <img
            src={cricketImage}
            alt="cricket"
            className="w-10 inline-block align-middle"
          />
        </p>
        <div className="mt-[50px] py-10 sm:py-0 sm:mt-0 sm:absolute sm:right-0 sm:w-[50%] sm:h-[100%] sm:top-10 flex flex-col justify-center items-center">
          <H3 className="mb-2 sm:mb-4 text-gray-400">Skills</H3>
          <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
            {Object.values(Skills).map((skill, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center gap-2 hover:scale-150 transition ease-in duration-300"
                >
                  <img
                    src={skill.image}
                    alt={`${skill.name}-${i}`}
                    className="h-10 "
                  />
                  <p className="text-gray-500 hover:text-gray-300 ">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="sm:py-10 pb-10 max-w-[50%]">
        <Link to="/projects">
          <Button
            buttonText={"checkout my projects"}
            className="text-gray-400 hover:text-gray-300"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Home;
