import defaultImage from "../assets/defaultImage.jpg";
import CardImage from "./CardImage";
import { Link } from "react-router-dom";
import H3 from "./H3";
import Button from "./Button";

const CardProject = ({ project }) => {
  const { slug, name, images } = project;
  // console.log(Object.values(images))

  return (
    <div className="md:w-1/3 sm:w-1/2 w-full p-2 max-w-sm">
      <div className="w-full bg-slate-500 rounded-md pb-5 px-2">
        <section className="card-project flex flex-row overflow-x-scroll gap-5 py-2">
          {/* {images ? (images.map((image, i) => {
            return <CardImage key={i} src={image} alt={name}/>
          })) : (<CardImage src={defaultImage} alt={name}/>)} */}
          {images ? (
            Object.values(images).map((image, i) => (
              <CardImage key={i} src={image} />
            ))
          ) : (
            <CardImage src={defaultImage} alt={name} />
          )}
        </section>
        <section className="mt-2 mb-4">
          <H3 className={"text-gray-800 text-center"}>{name}</H3>
        </section>
        <Link to={`/projects/${slug}`}>
          <Button buttonText={"Checkout"} />
        </Link>
        {/* {console.log(<ImportImages folderName={2048} />)} */}
      </div>
    </div>
  );
};

export default CardProject;
