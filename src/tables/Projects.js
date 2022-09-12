import { importAll } from "../components/ImportImages";

const Projects = [
  {
    slug: "colors",
    name: "colors",
    description:
      "This is the first fullstack project. We were a group of four, where two of them worked on front-end and the other two on back-end.",
    images: importAll(
      require.context("../images/colors", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://colors-4.netlify.app/",
  },
  {
    slug: "2048",
    name: "2048",
    description:
      "This is the first project for groups of more than two. We recreated the game 2048 with our own way in React.JS",
    images: importAll(
      require.context("../images/2048", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://2048-by-the-best.netlify.app/",
  },
  {
    slug: "miniblog",
    name: "miniblog",
    description:
      "This project is done using \"fs\", where it helped to modify files with the new information with a request. Creating an article and a category adds the new article or category into the json file. Here in netlify app i've blocked the creating methods for the moment because of an error in heroku. It'll be fully live as soon as i find a solution. ",
    images: importAll(
      require.context("../images/miniblog", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://miniblog-dt.netlify.app/",
  },
  {
    slug: "heroes",
    name: "heroes",
    description:
      "This is a fullstack project which i created except a database. First this project hadn't deployed then with the help of heroku, now it's live.",
    images: importAll(
      require.context("../images/heroes", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://heroes-dt.netlify.app/",
  },
  {
    slug: "moovice",
    name: "moovice",
    description:
      "In this project I got an API which is filled with TV series and movies. This is one of my favorite projects, because of the freedom we had while doing this.",
    images: importAll(
      require.context("../images/moovice", false, /\.(png|jpg|svg)$/)
    ),
    projectLink: "https://moovice-dt.netlify.app/",
  },
  {
    slug: "to-do-list",
    name: "To Do list",
    description:
      "This to do list is constructed with react.js which was pretty simple rather than the to do list with pure js.",
    images: importAll(
      require.context("../images/todolistReact", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://todo-list-react-dt.netlify.app/",
  },
  {
    slug: "pokemon",
    name: "Pokemon",
    description:
      "This is the first project that we had to deal with an API to get the details and play with it. The exrcise was to get a random pokemen each time.",
    images: importAll(
      require.context("../images/pokemon", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://pokemon-part-1.netlify.app/",
  },
  {
    slug: "to-do-list-js",
    name: "To Do list Js",
    description:
      "This to do list is constructed by pure js. Also a group project of two.",
    images: importAll(
      require.context("../images/todolistJs", false, /\.(png|jpe?g|svg)$/)
    ),
    projectLink: "https://shane99dt.github.io/toDoList/",
  },
  {
    slug: "shifumi",
    name: "Shifumi",
    description:
      "This is kind of the first real javascript assignment of the course.",
    images: importAll(
      require.context("../images/shifumi", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    slug: "deezer",
    name: "Deezer",
    description:
      "This is kind of the very first assignment that we had to clone this page using only html and css.",
    images: importAll(
      require.context("../images/deezer", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    slug: "cuizine",
    name: "Cuizine",
    description:
      "This is the first project for group of two. This project is also a clone website using only html and css.",
    images: importAll(
      require.context("../images/cuizine", false, /\.(png|jpe?g|svg)$/)
    ),
  },
];

export default Projects;
