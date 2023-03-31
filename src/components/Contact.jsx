import { useState, useRef, useEffect } from "react";
import Bg from "../assets/bg4.jpg";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
		useEffect(() => {
    AOS.init();
  }, []);
	const [form, setForm] = useState({
		user_name: "",
		user_email: "",
		message: "",
		error: "",
		dis: false,
		btn: "Send",
	});
	const changeHandler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const formData = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		if (!form.user_name || !form.user_email || !form.message) {
			setForm({ ...form, error: "Please fill all of the fields" });
		} else {
			emailjs
				.sendForm(
					"service_fohjy3d",
					"template_3j0837m",
					formData.current,
					"VqslDesWs09H6XGsh"
				)
				.then(
					(result) => {
						setForm({
							...form,
							btn: "Sent",
							error: "",
							dis: true,
							user_name: "",
							user_email: "",
							message: "",
						});
						console.log("message sent");
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};
	return (
		<div
			className="w-screen h-screen flex flex-col items-center justify-center"
			id="contact"
		>
			<p className="text-white font-black w-fit detail">CONTACT</p>
			<div
				data-aos="fade-up"
				className="bg w-x h-x rounded-xl flex items-center justify-center shadow-x p-2"
				style={{ backgroundImage: `url(${Bg})` }}
			>
				<form
					className="w-screen flex flex-col items-center justify-center"
					ref={formData}
					onSubmit={sendEmail}
				>
					<input
						value={form.user_name}
						onChange={changeHandler}
						name="user_name"
						className="bg-transparent backdrop-blur border-white border-2 rounded text-white p-2 mb-5 w-2/3 placeholder:text-gray-200 outline-none"
						placeholder="Enter Your Name"
						type="text"
					/>
					<input
						value={form.user_email}
						onChange={changeHandler}
						name="user_email"
						className="bg-transparent backdrop-blur p-2 border-white border-2 rounded mb-5 placeholder:text-gray-200 text-white outline-none w-2/3"
						placeholder="Enter Your Email"
						type="text"
					/>
					<textarea
						value={form.message}
						onChange={changeHandler}
						name="message"
						className="placeholder:text-gray-200 bg-transparent backdrop-blur border-white border-2 rounded p-2 text-white outline-none h-40 w-2/3"
						placeholder="Enter Your Message"
					></textarea>
					<p className="text-white my-2">{form.error}</p>
					<button
						type="submit"
						className="text-black bg-white p-2 rounded mt-1 hover:rounded-none cursor-pointer hover:px-10"
						disabled={form.dis}
					>
						{form.btn}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
