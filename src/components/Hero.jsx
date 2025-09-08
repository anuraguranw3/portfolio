import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-section h1", {
      y: -20,
      duration: 0.8,
      opacity: 0,
      delay: 1,
    });

    tl.from(".hero-section h3", {
      opacity: 0,
      y: -10,
      duration: 0.8
    });

    tl.from(".social-icon", {
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    tl.from("#scroll-btn", {
      opacity: 0,
      y: -10,
      duration: 0.8
    });

    // tl.to(".hero-section h1", {
    //   color: "yellow",
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 1.5,
    //   ease: "power1.inOut",
    // });

    // tl.to(".hero-section h3", {
    //   color: "yellow",
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 1.5,
    //   ease: "power1.inOut",
    // });

    // tl.to(".social-icon", {
    //   scale: 1.1,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "sine.inOut",
    //   duration: 1.5,
    // });

    // gsap.to("#scroll-btn", {
    //   y: 10,
    //   repeat: -1,
    //   yoyo: true,
    //   duration: 1.5,
    //   ease: "power1.inOut",
    // });

  });

  return (
    <>
      <div className="hero-section w-full h-[70%] flex flex-col justify-center items-center p-3 mt-16">
        <div
          className="w-full flex flex-col items-center justify-center p-5">
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3.15vw, 3rem)",
              fontFamily: '"Press Start 2P", system-ui'
            }}
            className="max-w-[90%] text-center font-bold shadow-sm py-2 px-4 rounded-lg shadow-black/70"
          >Hi, I&apos;m Anurag Uranw,</h1>
          <h3
            style={{
              fontSize: "clamp(1rem, 2vw, 2rem)",
              fontFamily: '"Press Start 2P", system-ui'
            }}
            className="max-w-[90%] text-center mt-4 font-bold shadow-sm py-2 px-4 rounded-lg shadow-black/70"
          >a Full Stack Developer</h3>
        </div>
        <div className="w-full p-3 flex justify-center items-center gap-3 ">
          <a
            className="social-icon text-3xl p-1 shadow-sm shadow-black rounded-lg hover:text-white hover:bg-black"
            href="https://www.linkedin.com/in/anurag-uranw-b07534267/"
            target="_blank"
            rel="noopener noreferrer"
          ><FaLinkedin /></a>
          <a
            className="social-icon text-3xl p-1 shadow-sm shadow-black rounded-lg hover:text-white hover:bg-black"
            href="https://github.com/anuraguranw3"
            target="_blank"
            rel="noopener noreferrer"
          ><FaGithub /></a>
        </div>
      </div>
      <button
        id="scroll-btn"
        className="block p-2 mx-auto text-3xl"
        type="button"
      ><FaAngleDoubleDown /></button>
    </>
  );
};

export default Hero;