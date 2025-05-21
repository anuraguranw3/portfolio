import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {

  useGSAP(() => {
    gsap.from(".about-title", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });
    gsap.from(".about-text", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      }
    });
    gsap.from(".about-container", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-container",
        start: "top 80%",
        end: "top 30%",
        scrub: 1,
      }
    })
  });

  return (
    <div className="w-full mt-20 p-5">
      <div className="about-container mx-auto w-[95%] md:w-[80%] lg:w-[60%] border-x-4 border-gray-300 text-center rounded-md p-3">
        <h3 className="about-title text-3xl pt-5 pb-7 text-gray-300 font-bold">About Me</h3>
        <p className="about-text text-md md:text-lg text-gray-300 font-bold">
          Hi, I&apos;m Anurag Uranw — a dedicated full-stack developer with a passion for building clean, efficient, and user-focused web applications. I enjoy solving complex problems, improving performance, and creating seamless user experiences from front to back. I&apos;m a strong believer in writing maintainable code, collaborating effectively, and continuously learning to stay ahead in the fast-paced world of web development.
        </p>
        <p className="about-text text-md md:text-lg mt-3 text-gray-300 font-bold">
          Over the years, I&apos;ve worked with a variety of modern technologies and frameworks, allowing me to adapt quickly to new challenges and deliver robust solutions. My approach combines creativity with analytical thinking, ensuring that every project I work on is both innovative and reliable. I thrive in collaborative environments and value open communication, as I believe the best results come from teamwork and shared knowledge.
        </p>
        <p className="about-text text-md md:text-lg mt-3 text-gray-300 font-bold">
          Outside of coding, I enjoy exploring new tools, and staying updated with the latest trends in tech. My goal is to not only build great products but also to grow as a developer and help others along the way.
        </p>
      </div>
    </div>
  );
};

export default About;