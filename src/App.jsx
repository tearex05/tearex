import {useEffect, useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import Bg from './assets/bg.jpg'
import Project1 from './assets/project1.jpg'
import Project2 from './assets/project2.jpg'
import Project3 from './assets/project3.jpg'
import Project4 from './assets/project4.jpg'
import skill1 from './assets/skill1.png'
import skill2 from './assets/skill2.png'
import skill3 from './assets/skill3.png'
import skill4 from './assets/skill4.png'
import skill5 from './assets/skill5.png'
import skill6 from './assets/skill6.png'
import skill7 from './assets/skill7.png'
import skill8 from './assets/skill8.png'
import skill9 from './assets/skill9.png'
import Masonry from "react-masonry-css"
import { LazyLoadImage } from "react-lazy-load-image-component";


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  let breakpointColumnsObj = {
    100000000: 2,
    1000: 1,
  };
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
    error: "",
    dis: false,
    btn: "Send"

  })
  const changeHandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const formData = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    if(!form.user_name || !form.user_email || !form.message){
      setForm({...form, error: "Please fill all of the fields"})
    } else {
    emailjs.sendForm('service_fohjy3d', 'template_3j0837m', formData.current, 'VqslDesWs09H6XGsh')
      .then((result) => {
        setForm({...form, btn: "Sent", error: "", dis: true, user_name: "", user_email: "", message: ""})
        console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
    }
  };
  return (
    <>
    <div id="home" style={{backgroundImage: `url(${Bg})`}} className="ani1 img w-screen h-screen flex items-center justify-center text-center">
      <h1 className={`text-2xl font-light m-4 sm:text-4xl md:text-5xl text-white`}>You do not find the happy life<br /><span className="text-6xl sm:text-8xl md:text-9xl font-bold">You make it</span></h1>
    </div>
    <div className="bg-black w-screen mt-40 text-4xl md:text-5xl relative mb-80">
      <h1 className="text-gray-200 -rotate-1 italic pl-6 pr-12 pb-2 leading-x">
        You need a <span className="text-6xl font-black text-white">Great Website</span> for your business, resume or if you want to introduce your services <span className="text-6xl font-black text-white">Modernly</span>. If you need one you are in the <span className="text-6xl font-black text-white">Right Place</span>.
      </h1>
    </div>
    <div id="skills" className={`w-screen min-h-screen flex flex-col items-center justify-center text-center text-white mt-10 text-5xl font-bold pb-4`}>
      <h1 className="pb-2">My Skills</h1>
      <div className="mt-10 w-screen min-h-screen text-white flex flex-col items-center">
        <h1 data-aos="fade-right" loading="lazy" className="img2 img2 w-9/12 rounded-3xl flex items-center justify-center text-5xl sm:text-6xl md:text-7xl text-center font-normal px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill1})`}}>React & Redux</h1>
        <h1 data-aos="fade-left" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill2})`}}>MongoDb</h1>
        <h1 data-aos="fade-right" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill3})`}}>NodeJs</h1>
        <h1 data-aos="fade-left" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill4})`}}>Express</h1>
        <h1 data-aos="fade-right" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill5})`}}>Javascript</h1>
        <h1 data-aos="fade-left" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill6})`}}>Python</h1>
        <h1 data-aos="fade-right" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill7})`}}>Tailwind</h1>
        <h1 data-aos="fade-left" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill8})`}}>Git & Github</h1>
        <h1 data-aos="fade-left" loading="lazy" className="img2 w-9/12 rounded-3xl flex items-center justify-center font-normal text-5xl sm:text-6xl md:text-7xl text-center px-5 py-16 cursor-pointer mb-20" style={{backgroundImage: `url(${skill9})`}}>Html & Css</h1>
      </div>
    </div>
    <div id="projects" className={`w-screen min-h-screen text-white mb-20 mt-60 text-4xl sm:text-5xl font-normal flex flex-col items-center justify-center text-center pl-10 pr-12 mb-10`}>
      <h1 className="mb-20">You Want <span className="font-black">Beautiful Websites </span> Like These?</h1>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
        <div className="rounded-xl flex items-center justify-center relative mb-8">
          <LazyLoadImage src={Project3} alt="" className="" />
          <div className="absolute z-2 bottom-0 left-0 text-white text-2xl sm:text-5xl lg:text-6xl m-3 hover:m-10 flex flex-col items-center justify-around">
          <p className="mb-1 pb-1 sm:pb-3">Shopping Website</p>
          <a href="https://tearex05.github.io/rexshop-frontend/" className="bg-black text-white text-lg sm:text-2xl p-3 w-fit rounded justify-center flex items-center" target="_blank" rel="noreferrer">Go to website</a>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center relative mb-8">
          <LazyLoadImage src={Project1} alt="" className="" />
          <div className="absolute z-2 bottom-0 left-0 text-white text-2xl sm:text-5xl lg:text-6xl m-3 hover:m-10 flex flex-col items-center justify-around">
          <p className="mb-1 pb-1">Chairs Website</p>
          <a href="https://tearex05.github.io/rexchairs" className="bg-black text-white text-lg sm:text-2xl p-3 w-fit rounded justify-center flex items-center" target="_blank" rel="noreferrer">Go to website</a>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center relative mb-8">
          <LazyLoadImage src={Project4} alt="" className="" />
          <div className="absolute z-2 bottom-0 left-0 text-white text-2xl sm:text-5xl lg:text-6xl m-3 hover:m-10 flex flex-col items-center justify-around">
          <p className="mb-1 pb-1">Todo List Website</p>
          <a href="https://tearex05.github.io/todo-frontend/" className="bg-black text-white text-xl sm:text-2xl p-3 w-fit rounded justify-center flex items-center" target="_blank" rel="noreferrer">Go to website</a>
          </div>
        </div>
        <div className="rounded-xl flex items-center justify-center relative mb-8">
          <LazyLoadImage src={Project2} alt="" className="" />
          <div className="absolute z-2 bottom-0 left-0 text-white text-2xl sm:text-5xl lg:text-6xl m-3 hover:m-10 flex flex-col items-center justify-around">
          <p className="mb-1 pb-1">Shoes Website</p>
          <a href="https://tearex05.github.io/rexshoes" className="bg-black text-white text-xl sm:text-2xl p-3 w-fit rounded justify-center flex items-center" target="_blank" rel="noreferrer">Go to website</a>
          </div>
        </div>
      </Masonry>
    </div>
    <div id="contact" className="mt-40 mb-28 pt-20 text-center">
      <h1 className="text-white text-3xl mb-5 sm:text-4xl md:text-6xl">Contact Me</h1>
      <form className="w-screen flex flex-col items-center justify-center" ref={formData} onSubmit={sendEmail}>
        <input value={form.user_name} onChange={changeHandler} name='user_name' className="bg-black input mx-10 border-white border-2 rounded  text-white p-2 max-w-7xl mb-5 placeholder:text-gray-200 outline-none " placeholder="Enter Your Name" type="text" />
      <input value={form.user_email} onChange={changeHandler} name='user_email' className="bg-black p-2 input mx-10 border-white border-2 rounded mb-6 placeholder:text-gray-200 text-white outline-none" placeholder="Enter Your Email" type="text" />
      <textarea value={form.message} onChange={changeHandler} name='message' className="text input placeholder:text-gray-200 bg-black border-white border-2 rounded p-2 text-white outline-none h-40"  placeholder="Enter Your Message"></textarea>
      <p className="text-white text-xl mt-4">{form.error}</p>
      <button type="submit" className="text-black bg-white p-2 rounded mt-3 text-xl hover:rounded-none cursor-pointer" disabled={form.dis}>{form.btn}</button>
      </form>
    </div>
    <div className="my-60 w-screen text-center items-center justify-center flex flex-col md:flex-row md:border-l-8 border-white">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-10 pb-2 md:mb-0 md:w-2/3 flex items-center justify-center">My Social Media</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/3 flex items-center justify-center place-items-center">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/reza-yekta-ab6688254/" className="text-white text-8xl mx-6 mb-8 md:mb-0">
          <AiFillLinkedin />
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/tearex05" className="text-white text-8xl mx-6">
          <FaTelegram />
        </a>
      </div>
    </div>
    <footer className={`w-screen mb-2 mt-20 text-white flex items-center justify-center font-bold text-xl`}>
      Created By Tearex
    </footer>
    </>
  )
}

export default App