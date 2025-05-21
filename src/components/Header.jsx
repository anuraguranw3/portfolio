import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ulRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    if (!isMenuOpen) {
      const tl = gsap.timeline();

      tl.to(
        mobileMenuRef.current,
        {
          top: "0%",
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        mobileMenuRef.current.querySelectorAll("ul li"),
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      tl.fromTo(
        mobileMenuRef.current.querySelectorAll("button"),
        { opacity: 0, scale: 0.8, y: -20 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          y: 0,
          ease: "power3.out",
        }
      );

    } else {
      gsap.to(mobileMenuRef.current, {
        top: "-100%",
        opacity: 0,
        duration: 0.8,
        ease: "power3.in",
      });
    }
  };

  useGSAP(() => {

    gsap.from(ulRef.current.children, {
      opacity: 0,
      x: -5,
      y: -20,
      delay: 1,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <header className="w-full h-16 fixed top-0 left-0 flex justify-end p-4 items-center lg:justify-center bg-black z-50">
      <ul ref={ulRef} className="hidden lg:flex gap-7 text-lg font-bold font-serif">
        <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Home</li>
        <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">About</li>
        <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Skills</li>
        <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Projects</li>
      </ul>
      <button
        onClick={toggleMenu}
        className="text-4xl lg:hidden mr-3 border-2 border-transparent rounded active:border-white"
      >
        <CgMenuRightAlt />
      </button>

      <div
        onClick={(e) => {
          if (e.target === mobileMenuRef.current) {
            toggleMenu();
          }
        }}
        ref={mobileMenuRef} className="w-full h-screen p-3 fixed top-[-100%] left-0 bg-blue-950 overflow-hidden flex flex-col justify-center items-center lg:hidden">

        <ul className="p-5 lg:hidden gap-7 text-2xl font-bold font-serif flex flex-col items-center">
          <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Home</li>
          <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">About</li>
          <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Skills</li>
          <li className="py-1 px-2 rounded hover:text-black hover:bg-white cursor-pointer">Projects</li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-4xl lg:hidden mt-8 border-2 border-transparent rounded active:border-white"
        >
          <GrClose />
        </button>
      </div>
    </header>
  );
};

export default Header;