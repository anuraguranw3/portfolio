import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import project1 from "../assets/projects/656029.png";
import project2 from "../assets/projects/688004.jpg";
import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Games Mania",
      imgURL: project1,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project. dfsdfdf fhsdofhdsfhdshfds d f df d d d d d d fd fd f df df d df sd ew rew r wer we rew rew r ewr ewr ew rwe  ew rewrew r w g dfg dsf f dsf sd fsd f ds fsd fsd f d ds ds dshfsdfkdsds sdsd  sddslkfsdjlds d d d sdsdklfsdjfksdfjsd fds",
      tech: ["express", "react", "postgres"]
    },
    {
      id: 2,
      name: "Games Mania",
      imgURL: project2,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project.",
      tech: ["express", "react", "postgres"]
    },
    {
      id: 3,
      name: "Games Mania",
      imgURL: project1,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project.",
      tech: ["express", "react", "postgres"]
    },
    {
      id: 4,
      name: "Games Mania",
      imgURL: project2,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project.",
      tech: ["express", "react", "postgres"]
    },
    {
      id: 5,
      name: "Games Mania",
      imgURL: project1,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project.",
      tech: ["express", "react", "postgres"]
    },
    {
      id: 6,
      name: "Games Mania",
      imgURL: project2,
      demoLink: "#demo",
      githubLink: "#github",
      desc: "This is demo desc for this demo project.",
      tech: ["express", "react", "postgres"]
    },
  ];

  return (
    <Element name="projects" className="projects-section w-full mt-20 p-3 flex flex-col items-center">
      <h3 className="text-3xl font-bold text-gray-400 pb-7">Projects</h3>
      <div className="w-full p-1 flex justify-evenly gap-5 flex-wrap">
        {
          projects.map((project) =>
            <div
              className="w-[95%] md:w-[45%] lg:w-[30%] bg-gray-900 px-1 rounded-md"
              key={project.id}
            >
              <img
                className="w-full rounded-sm"
                src={project.imgURL}
                alt={project.name}
              />
              <h3
                className="text-xl p-2"
              >{project.name}</h3>
              <div className="p-2 flex gap-2 items-center">
                <a
                  className="text-3xl"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                ><FaGithub /></a>
                <a
                  className="text-3xl"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                ><MdOpenInNew />
                </a>
              </div>
              <p className="p-2">{project.desc}</p>
            </div>
          )
        }
      </div>
    </Element>
  );
};

export default Projects;