import { useState } from "react";
import Bg from "../assets/bg3.jpg";
import skill1 from "../assets/skill1.png";
import skill2 from "../assets/skill2.png";
import skill3 from "../assets/skill3.png";
import skill4 from "../assets/skill4.png";
import skill5 from "../assets/skill5.png";
import skill6 from "../assets/skill6.png";
import skill7 from "../assets/skill7.png";
import skill8 from "../assets/skill8.png";
import skill9 from "../assets/skill9.png";
import skill10 from "../assets/skill10.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [style, setStyle] = useState({
    wh1: "w-1/2",
    wh2: "w-1/2",
    margin: "mr-4",
    span1: "opacity-100",
    span2: "",
    move: "ts",
    visible1: "w-0",
    visible2: "w-0",
  });
  const backendHandler = () => {
    if(style.wh1 === "w-1/2"){
    setStyle({
      ...style,
      wh1: "w-full",
      wh2: "w-0",
      margin: "",
      span1: "opacity-0 w-0 h-0",
      span2: "",
      move: "",
      visible1: "w-full"
    })} else {
      setStyle({
      ...style,
      wh1: "w-1/2",
      wh2: "w-1/2",
      margin: "mr-4",
      span1: "opacity-100",
      span2: "",
      move: "ts",
      visible1: "w-0"
    });
    }
  };
  const frontendHandler = () => {
    if(style.wh2 === "w-1/2"){
    setStyle({
      ...style,
      wh2: "w-full",
      wh1: "w-0",
      margin: "",
      span2: "opacity-0 w-0 h-0",
      span1: "",
      visible2: "w-full"
    })} else {
      setStyle({
      ...style,
      wh1: "w-1/2",
      wh2: "w-1/2",
      margin: "mr-4",
      span1: "opacity-100",
      span2: "",
      visible2: "w-0"
    });
    }
  };
  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      id="skills"
    >
      <p className="text-white font-black w-fit detail">SKILLS</p>
      <div
        data-aos="fade-up"
        className={`bg w-x h-x rounded-xl shadow-x p-4 flex flex-row`}
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div
          className={`text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black backdrop-blur-lg rounded-2xl ${style.wh1} h-full text-center flex items-center justify-center relative ${style.margin} cursor-pointer origin-left relative`}
          onClick={backendHandler}
        >
          <span className={`${style.span1}`}>BACKEND</span>
            <div className={`h-full flex flex-col items-center justify-around absolute px-5 py-2 ${style.visible1} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8 flex items-center justify-center text-center rounded" style={{backgroundImage: `url(${skill2})`}}>
              MONGODB
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8 flex items-center justify-center text-center rounded" style={{backgroundImage: `url(${skill3})`}}>
              NODEJS
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8 flex items-center justify-center text-center rounded" style={{backgroundImage: `url(${skill4})`}}>
              EXPRESSJS
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8 flex items-center justify-center text-center rounded" style={{backgroundImage: `url(${skill6})`}}>
              PYTHON
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8 flex items-center justify-center text-center rounded" style={{backgroundImage: `url(${skill10})`}}>
              MYSQL
            </div>
          </div>
        </div>
        <div
          className={`text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black backdrop-blur-lg rounded-2xl text-center flex items-center justify-center relative ${style.wh2} h-full cursor-pointer origin-right`}
          onClick={frontendHandler}
        >
          <span className={`${style.span2}`}>FRONTEND</span>
          <div className={`h-full flex flex-col items-center justify-around absolute px-5 py-2 ${style.visible2} text-xl sm:text-2xl md:text-3xl lg:text-4xl`}>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8  rounded" style={{backgroundImage: `url(${skill1})`}}>
              REACT & REDUX
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8  rounded" style={{backgroundImage: `url(${skill5})`}}>
              JAVASCRIPT
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8  rounded" style={{backgroundImage: `url(${skill7})`}}>
              TAILWIND
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8  rounded" style={{backgroundImage: `url(${skill8})`}}>
              GIT & GITHUB
            </div>
            <div className="bg w-full my-1 py-2 sm:py-5 md:py-7 lg:py-8  rounded" style={{backgroundImage: `url(${skill9})`}}>
              HTML & CSS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
