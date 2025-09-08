import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Skills = () => {

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".skills-section h3", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".skills-section h3",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });

    tl.from(".skills-section .skills-set1 li", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-section .skills-set1 li",
        start: "top 78%",
        end: "top 50%",
        scrub: 1,
      }
    });

    gsap.from(".skills-section .skills-set2 li", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skills-section .skills-set2 li",
        start: "top 95%",
        end: "top 70%",
        scrub: 1,
      }
    });

    gsap.to(".skills-set1 li, .skills-set2 li", {
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      borderColor: "white",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 0.6,
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true,
      },
    });

  });



  return (
    <div className="skills-section w-full mt-24 flex flex-col items-center p-3">
      <h3 className="text-3xl font-bold text-gray-400 pt-5 pb-7">Skills</h3>
      <div className="w-full flex flex-col gap-5 p-1">
        <ul className="skills-set1 w-full md:w-[95%] p-2 mx-auto gap-3 md:gap-4 lg:gap-6 flex-row flex flex-wrap justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl">

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-javascript-plain" />
            <h4>JavaScript</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-react-original" />
            <h4>React JS</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-nodejs-plain-wordmark" />
            <h4>Node JS</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-express-original" />
            <h4>Express JS</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-postgresql-plain" />
            <h4>PostgresSQL</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-prisma-original" />
            <h4>Prisma</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-html5-plain" />
            <h4>HTML5</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-css3-plain" />
            <h4>CSS3</h4>
          </li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default">
            <i className="devicon-tailwindcss-original" />
            <h4>Tailwind CSS</h4>
          </li>

        </ul>

        <ul className="skills-set2 w-full md:w-[95%] p-2 mx-auto flex flex-wrap gap-3 md:gap-4 lg:gap-5 justify-center text-md md:text-xl lg:text-2xl font-semibold">

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >RESTful APIs</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >JWT - Json Web Token</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Redux</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Passport JS</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Bcrypt JS</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Axios</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Context API</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >EJS</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >pg</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Multer</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Git</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >GitHub</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >VS Code</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Postman</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >pgAdmin</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Netlify</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Render</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Aiven</li>

          <li className="flex items-center gap-3 border-x-4 border-y-2 border-gray-600 rounded-lg p-2 cursor-default"
          >Cloudinary</li>

        </ul>

      </div>
    </div>
  );
};

export default Skills;