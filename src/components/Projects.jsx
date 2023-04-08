import { useState, useEffect } from "react";
import Bg from "../assets/bg2.jpg";
import Shop from "../assets/shop.jpg";
import Todo from "../assets/todo.jpg";
import Chair from "../assets/chair.jpg";
import Shoe from "../assets/shoe.jpg";
import Calculator from "../assets/calculator.jpg";
import Realestate from "../assets/realestate.jpg";
import Tower from "../assets/tower.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
	useEffect(() => {
    AOS.init();
  }, []);
	let data = [
		{
			id: 1,
			name: "TowerPlus",
			info: "Made with React.Js and tailwind",
			url: "https://tearex05.github.io/towerplus",
			image: Tower,
		},
		{
			id: 2,
			name: "Todo List",
			info: "Made with React.Js, Express.Js, Node.Js and Mongodb",
			url: "https://tearex05.github.io/todo-frontend/",
			image: Todo,
		},
		{
			id: 3,
			name: "RexChair",
			info: "Made with React.Js and Tailwind",
			url: "https://tearex05.github.io/rexchairs",
			image: Chair,
		},
		{
			id: 4,
			name: "RexShoes",
			info: "Made with React.Js and Tailwind",
			url: "https://tearex05.github.io/rexshoes",
			image: Shoe,
		},
		{
			id: 5,
			name: "Real Estate",
			info: "Made with React.Js and Tailwind",
			url: "https://tearex05.github.io/realestate",
			image: Realestate,
		},
		{
			id: 6,
			name: "Calculator",
			info: "Made with React.Js and pure css",
			url: "https://tearex05.github.io/calculator",
			image: Calculator,
		},
		{
			id: 7,
			name: "RexShop",
			info: "Made with React.Js, Express.Js, Node.Js, MySQL, Tailwind and Redux",
			url: "https://tearex05.github.io/rexshop/",
			image: Shop,
		},
	];
	const [selectedId, setSelectedId] = useState(null);
	return (
		<>
			<div
				className="w-screen h-screen flex flex-col items-center justify-center"
				id="projects"
			>
				<p className="text-white font-black w-fit detail">PROJECTS</p>
				<div
					
					className={`bg w-x h-x rounded-xl ${selectedId ? ("flex") : ("grid")} sm:gap-12 shadow-x place-items-center gap-8 ${selectedId ? ("p-1") : ("p-8 sm:p-12")} grid-cols-3 relative`}
					style={{ backgroundImage: `url(${Bg})` }}
				>
				{selectedId ? (
							data.filter(d => d.id === selectedId).map(item => (
						<>
							<div className="w-full h-full grid grid-cols-2 place-items-center p-2 backdrop-blur rounded-2xl relative">
							<span className="absolute top-0 right-0 text-white text-2xl mr-2 cursor-pointer font-bold" onClick={() => setSelectedId(null)}>
								×
							</span>
								<div className=" h-full w-full bg rounded-2xl" style={{backgroundImage: `url(${item.image})`}}></div>
								<div className="w-full h-full text-white text-center flex flex-col items-center justify-center px-5">
									<h1 className="text-xl sm:text-3xl md:text-5xl  font-bold mb-5">{item.name}</h1>
									<p className="text-sm sm:text-md md:text-lg">{item.info}</p>
									<a target="_blank_" className="bg-white px-2 hover:px-4 tran py-1 rounded text-black mt-5 lg:text-lg" href={item.url}>Visit</a>
								</div>
							</div>
							</>
						))
						) : (
						data.map(item => (
							<div key={item.id} 
							data-aos="fade-up"className={`w-full h-full backdrop-blur-2xl hover:scale-105 tran ${item.id === 1 && ("row-span-3")}`} onClick={() => setSelectedId(item.id)}>
							<div
							style={{ backgroundImage: `url(${item.image})` }}
							className={`bg rounded w-full h-full cursor-pointer`}
						></div>
						</div>
						))
						)}		
				</div>
			</div>
		</>
	);
}

export default Projects;
