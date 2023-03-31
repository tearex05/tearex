import {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import {SiGmail} from "react-icons/si"


function Socials() {
	useEffect(() => {
    AOS.init();
  }, []);
	return (
		<div
			className="w-screen h-screen flex flex-col items-center justify-center text-center"
			id="socials"
		>
			<p className="text-white font-black w-fit detail">SOCIALS</p>
			<div
				className="bg-white1 w-x h-x rounded-xl flex flex-col items-center justify-around shadow-x p-2 home-container z-10"
				data-aos="fade-up"
			>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/reza-yekta-ab6688254/"
					className="text-black text-7xl md:text-8xl flex flex-col items-center justify-center text-center logo hover:-translate-y-1"
				>
					<AiFillLinkedin />
					<p className="text-black text-xl font-black text">reza yekta</p>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://t.me/tearex05"
					className="text-black text-7xl md:text-8xl flex flex-col items-center justify-center text-center logo hover:-translate-y-1"
				>
					<FaTelegram />
					<p className="text-black text-xl font-black text">tearex05</p>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://t.me/tearex05"
					className="text-black text-7xl md:text-8xl hover:justify-around flex items-center relative flex flex-col items-center justify-center text-center logo hover:-translate-y-1"
				>
					<SiGmail />
					<p className="text-black text-xl font-black text">tearex0505@gmail.com</p>
				</a>
			</div>
		</div>
	);
}

export default Socials;
