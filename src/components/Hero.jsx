import "../styles/Hero.css";
import profile_image from "../assets/profile_image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="image" />
      <h1><span>I&apos;am Anurag Uranw,</span> a frontend developer from India.</h1>
      <p>Frontend Developer with a passion for building intuitive web interfaces using React.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me <span className="material-symbols-outlined">
          arrow_outward
        </span></AnchorLink></div>
      </div>
    </div>
  );
};

export default Hero;