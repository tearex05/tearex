import {useState, useEffect} from 'react'

function Nav() {
	const [style, setStyle] = useState({
		margin: "mb-2",
		rot: "rotate-0",
		rot2: "-rotate-0",
		move: "translate-x-full",
		color: "bg-transparent"
	})
	useEffect(() => {
		window.addEventListener('scroll', changeColor)
	})
	const changeColor = () => {
		if(window.scrollY > 100){
			setStyle({...style, color:`bg-black`})
		} else {
			setStyle({...style, color:"bg-transparent"})
		}
	}
	const navHandler = () => {
		if(style.margin === "mb-2"){
			setStyle({...style, margin: "mb-0", rot: "rotate-45", rot2: "-rotate-45", move:"translate-x-0"})
		} else {
			setStyle({...style, margin: "mb-2", rot: "rotate-0", rot2: "-rotate-0", move:"translate-x-full"})
		}
	}
	return (
		<>
		<div className={`fixed z-50 top-0 right-0 bg-black h-9 w-9 md:hidden block m-5 flex flex-col items-center justify-center cursor-pointer`} onClick={navHandler}>
		<div className={`bg-white h-x1 w-7 transition-all duration-300 ${style.margin} ${style.rot}`}></div>
		<div className={`bg-white h-x1 w-7 transition-all duration-300 ${style.rot2}`}></div>
		</div>
		<div className={`fixed w-screen h-screen bg-black flex-col items-center justify-around px-8 text-6xl sm:items-start sm:text-8xl md:hidden flex ${style.move} transition-all duration-500 z-20`}>
			<a href="#skills" className={`text-black h-full flex items-center st hover:text-white transition-all duration-500`}>Skills</a>
			<a href="#projects" className={`text-black st hover:text-white flex items-center transition-all h-full duration-500`}>Projects</a>
			<a href="#contact" className={`text-black st hover:text-white flex items-center transition-all h-full  duration-500`}>Contact Me</a>
		</div>
		<div className={`fixed w-screen h-screen bg-white md:invisible visible ${style.move} transition-all duration-400 z-10`}></div>

		<div className={`md:flex fixed z-10 top-0 w-screen hidden text-white items-center justify-between p-4 text-xl ${style.color}`}>
			<a href="#home" className="w-11/12 font-bold text-2xl hover:underline cursor-pointer">TeaRex</a>
			<section className="flex items-center justify-around w-full">
				<a href="#skills" className="hover:underline cursor-pointer">Skills</a>
				<a href="#projects" className="hover:underline cursor-pointer">Projects</a>
				<a href="#contact" className={`bg-white text-black p-2 rounded hover:underline cursor-pointer`}>Contact Me</a>
			</section>
		</div>
		</>
	)
}

export default Nav