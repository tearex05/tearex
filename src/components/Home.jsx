import Bg from "../assets/bg1.jpg"
import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
		useEffect(() => {
    AOS.init();
  }, []);
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center text-center" id="home">
				<p className="text-white font-black w-fit detail">HOME</p>
			<div data-aos="fade-up" className="bg w-x h-x rounded-xl flex items-center justify-center shadow-x p-2 home-container z-10" style={{backgroundImage: `url(${Bg})`}}>
			<h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">You don't make the happy life<br /><span className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">You Make It</span></h1>
			</div>
		</div>
	)
}

export default Home