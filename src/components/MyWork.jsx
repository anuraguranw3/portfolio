import "../styles/MyWork.css";
import myWorks from "../myWorks";

const MyWork = () => {
  return (
    <div id="work" className="my-work">
      <h1>
        My latest work
        <span className="material-symbols-outlined">south</span>
      </h1>
      <div className="my-work-container">
        {
          myWorks.map((work, index) => {
            return <img key={index} src={work.src} alt="" />
          })
        }
      </div>
    </div>
  );
};

export default MyWork;