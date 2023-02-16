import {useEffect, useState} from 'react'
import Nav from './components/Nav'
import AOS from "aos";
import "aos/dist/aos.css";
import {SiGmail} from 'react-icons/si'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaYahoo, FaTelegram} from 'react-icons/fa'
import Bg from './assets/bg.jpg'
import Project1 from './assets/project1.png'
import Project2 from './assets/project2.png'
import Project3 from './assets/project3.png'
import Project4 from './assets/project4.png'
import skill1 from './assets/skill1.png'
import skill2 from './assets/skill2.png'
import skill3 from './assets/skill3.png'
import skill4 from './assets/skill4.png'
import skill5 from './assets/skill5.png'
import skill6 from './assets/skill6.png'
import skill7 from './assets/skill7.png'
import skill8 from './assets/skill8.png'
import skill9 from './assets/skill9.png'



function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Nav />
    <div id="home" style={{backgroundImage: `url(${Bg})`}} className="img w-screen h-screen flex items-end justify-start">
      <h1 className={`text-3xl font-light m-4 sm:text-4xl md:text-5xl text-white`}>You do not find the happy life<br /><span className="text-7xl sm:text-8xl md:text-9xl font-bold">You make it</span></h1>
    </div>
    <div className={`bg-black w-screen min-h-screen pl-5 pr-10 mt-96 text-8xl mx-2 -rotate-3 italic`}>
      <h1 className={`st text-black`}>To Have A <span className={`text-white text-9xl`}>Great Business</span> Or To Introduce YourSelf In A Modern Way You Need A <span className={`text-white text-9xl`}>Beautiful Website</span>. What Place Better Than <span className={`text-white text-9xl`}>Here</span>?</h1>
    </div>
    <div id="skills" className={`w-screen min-h-screen flex flex-col items-center justify-center text-center text-white mt-80 text-6xl`}>
      <h1>Here Are My Skills & More...</h1>
      <div className={`mt-20 w-screen min-h-screen text-white`}>
        <h1 data-aos="fade-right" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill1})`}}>React & Redux</h1>
        <h1 data-aos="fade-left" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill2})`}}>MongoDb</h1>
        <h1 data-aos="fade-right" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill3})`}}>NodeJs</h1>
        <h1 data-aos="fade-left" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill4})`}}>Express</h1>
        <h1 data-aos="fade-right" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill5})`}}>Js</h1>
        <h1 data-aos="fade-left" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill6})`}}>Python</h1>
        <h1 data-aos="fade-right" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill7})`}}>Tailwind</h1>
        <h1 data-aos="fade-left" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill8})`}}>Git & Github</h1>
        <h1 data-aos="fade-left" loading="lazy" className="w-screen flex items-center justify-center text-5xl font-bold text-center px-5 py-10 cursor-pointer mb-40" style={{backgroundImage: `url(${skill9})`}}>Html & Css</h1>
      </div>
    </div>
    <div id="projects" className={`w-screen min-h-screen text-white mb-20 mt-80 text-5xl font-normal flex flex-col items-center justify-center text-center pl-10 pr-12 mb-10`}>
      <h1 className="mb-20">You Want <span className="font-black">Beautiful Websites</span> Like These?</h1>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        <a data-aos="zoom-out-up" target="_blank" href="https://tearex05.github.io/rexshop-frontend/" className="w-10/12 hover:rotate-12 transition-all duration-500">
          <img loading="lazy" className={`rounded-3xl hover:rotate-12 transition-all duration-500`} src={Project1} alt="" />
        </a>
        <a data-aos="zoom-out-down" target="_blank" href="https://tearex05.github.io/todo-frontend" className="w-10/12">
          <img loading="lazy" className={`rounded-3xl hover:-rotate-12 transition-all duration-500`} src={Project2} alt="" />
        </a>
        <a data-aos="zoom-out-up" target="_blank" href="https://tearex05.github.io/rexchairs" className="w-10/12 hover:rotate-12 transition-all duration-500">
          <img loading="lazy" className={`rounded-3xl hover:rotate-12 transition-all duration-500`} src={Project3} alt="" />
        </a>
        <a data-aos="zoom-out-down" target="_blank" href="https://tearex05.github.io/rexshoes/" className="w-10/12 hover:rotate-12 transition-all duration-500">
          <img loading="lazy" className={`rounded-3xl hover:-rotate-12 transition-all duration-500`} src={Project4} alt="" />
        </a>
      </div>
    </div>
    <div id="contact" className="w-screen flex flex-col items-center place-items-center mt-96 mb-40">
      <h1 className={`text-6xl sm:text-7xl lg:text-9xl text-white mb-20`}>Contact Me</h1>
      <div className={`flex flex-col sm:grid-cols-3 mt-10 text-7xl sm:text-9xl gap-20 place-items-center text-white`}>
        <a target="_blank" href="https://www.linkedin.com/in/tea-rex-ab6688254/" className="flex items-center justify-around">
          <AiFillLinkedin color="white" />
          <p className={`text-2xl hidden lg:block lg:ml-10 text-6xl font-bold p-2 text-black st`}>Tea Rex</p>
        </a>
        <a target="_blank" href="mailto: tearex05@yahoo.com" className="flex items-center justify-around">
          <FaYahoo color="white" />
          <p className={`text-2xl hidden lg:block lg:ml-10 text-6xl font-bold p-2 text-black st`}>tearex05@yahoo.com</p>
        </a>
        <a target="_blank" href="https://t.me/tearex05" className="flex items-center justify-around">
          <FaTelegram color="white" />
          <p className={`text-2xl hidden lg:block lg:ml-10 text-6xl font-bold p-2 text-black st`}>@tearex05</p>
        </a>
      </div>
    </div>
    <footer className={`w-screen mb-2 mt-20 text-white flex items-center justify-center font-bold`}>
      Created By Tearex
    </footer>
    </>
  )
}

export default App