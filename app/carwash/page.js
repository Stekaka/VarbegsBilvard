"use client";
import { useState } from "react";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";
import { FaCarSide, FaSprayCan, FaMagic, FaShieldAlt, FaEraser, FaSoap, FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const carwashServices = [
	{ title: "Invändig tvätt", price: "fr 299 kr", icon: <FaSoap />, desc: "Noggrann rengöring av bilens insida, inklusive dammsugning och avtorkning." },
	{ title: "Utvändig tvätt", price: "fr 249 kr", icon: <FaCarSide />, desc: "Skonsam handtvätt av bilens utsida för ett skinande resultat." },
	{ title: "Utvändig tvätt PLUS (Asfalt & Flygrostborttagning)", price: "fr 399 kr", icon: <FaSprayCan />, desc: "Extra grundlig tvätt med borttagning av asfalt och flygrost." },
	{ title: "Heltvätt", price: "fr 899 kr", icon: <FaMagic />, desc: "Både in- och utvändig tvätt för en komplett uppfräschning." },
	{ title: "Helrekond", price: "fr 2699 kr", icon: <FaStar />, desc: "Djupgående rekonditionering med polering och vaxning." },
	{ title: "Lackskydd", price: "fr 3999 kr", icon: <FaShieldAlt />, desc: "Professionellt lackskydd för långvarig glans och skydd." },
	{ title: "Borttagning av foliering", price: "fr 499 kr", icon: <FaEraser />, desc: "Skonsam borttagning av foliering eller dekaler." },
];
	
const timeSlots = [
	"09:00", "10:00", "11:00", "12:00",
	"13:00", "14:00", "15:00", "16:00",
	"17:00", "18:00", "19:00"
];

export default function CarwashPage() {
	const [showBubbles, setShowBubbles] = useState(true);
	const [booking, setBooking] = useState({
		open: false,
		service: null,
		date: "",
		time: "",
		name: "",
		phone: "",
		loading: false,
		success: false,
		error: "",
	});

	async function handleBooking(e) {
		e.preventDefault();
		setBooking(b => ({ ...b, loading: true, error: "" }));
		try {
			// Replace this with your real API endpoint!
			const res = await fetch("/api/book", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					service: booking.service,
					date: booking.date,
					time: booking.time,
					name: booking.name,
					phone: booking.phone,
				}),
			});
			if (!res.ok) throw new Error("Något gick fel. Försök igen.");
			setBooking(b => ({ ...b, loading: false, success: true }));
		} catch (err) {
			setBooking(b => ({ ...b, loading: false, error: err.message || "Fel vid bokning." }));
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-red-100 via-gray-200 to-gray-800 flex flex-col overflow-x-hidden relative">
			<MenuBar showBubbles={showBubbles} setShowBubbles={setShowBubbles} />
			{showBubbles && <BubblesBackground />}
			{/* Decorative overlay */}
			<div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
				<div className="absolute top-0 left-0 w-1/2 h-1/2 bg-red-100 rounded-full blur-3xl opacity-40" />
				<div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-red-200 rounded-full blur-2xl opacity-30" />
				<div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-600 rounded-full blur-2xl opacity-30" />
			</div>
			<main className="flex-1 w-full flex flex-col relative z-10 pt-20">
				<section className="w-full max-w-5xl mx-auto px-4 py-16">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-red-900 mb-4 text-center drop-shadow-lg">
						Biltvätt & Rekond
					</h1>
					<p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
						Välj bland våra populära tjänster för ett skinande rent fordon – både in- och utvändigt. Vi använder miljövänliga produkter och erbjuder alltid personlig service.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{carwashServices.map((s) => (
							<div
								key={s.title}
								className="w-full max-w-xs mx-auto bg-white/90 rounded-3xl shadow-xl border border-red-100 p-6 flex flex-col items-center transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-200"
								style={{
									boxShadow: "0 4px 32px 0 rgba(239,68,68,0.06), 0 2px 8px 0 rgba(0,0,0,0.08)",
								}}
							>
								<div className="mb-4 text-4xl text-red-400 drop-shadow-lg">{s.icon}</div>
								<h2 className="text-xl font-bold text-red-900 mb-2 text-center">{s.title}</h2>
								<div className="mb-4">
									<span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow">
										{s.price}
									</span>
								</div>
								<p className="text-gray-700 text-center mb-6">{s.desc}</p>
								<button
									className="glassy-btn glassy-btn-red mt-auto text-center font-bold w-full"
									onClick={() => setBooking({
										open: true,
										service: s.title,
										date: "",
										time: "",
										name: "",
										phone: "",
										loading: false,
										success: false,
										error: "",
									})}
								>
									BOKA NU
								</button>
							</div>
						))}
					</div>
				</section>
			</main>
			{/* Booking Popup */}
			{booking.open && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2"
					onClick={() => setBooking(b => ({ ...b, open: false }))}
				>
					<div
						className="relative bg-gradient-to-br from-white via-red-50 to-red-100 rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-auto border border-red-100 max-h-[95vh]"
						onClick={e => e.stopPropagation()}
					>
						<button
							className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-3xl font-bold z-10 transition"
							onClick={() => setBooking(b => ({ ...b, open: false }))}
							aria-label="Stäng"
							style={{ lineHeight: 1 }}
						>
							&times;
						</button>
						{/* Left: Info & Calendar */}
						<div className="flex-1 p-4 sm:p-8 flex flex-col justify-center">
							<div className="flex flex-col items-center mb-6">
								<div className="text-4xl text-red-400 mb-2">
									{carwashServices.find(s => s.title === booking.service)?.icon}
								</div>
								<h3 className="text-2xl font-extrabold text-red-900 mb-1 text-center">
									{booking.service}
								</h3>
								<div className="text-gray-600 text-center mb-2 text-base">
									{carwashServices.find(s => s.title === booking.service)?.desc}
								</div>
							</div>
							<div>
								<div className="text-sm font-semibold text-red-700 mb-2">1. Välj datum</div>
								<div className="flex justify-center mb-6">
									<DatePicker
										inline
										selected={booking.date ? new Date(booking.date) : null}
										onChange={date =>
											setBooking(b => ({
												...b,
												date: date ? date.toISOString().slice(0, 10) : "",
												time: "",
											}))
										}
										minDate={new Date()}
										calendarStartDay={1}
										dayClassName={date =>
											"cursor-pointer rounded-full hover:bg-red-100 transition"
										}
									/>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								<label className="block text-gray-700 font-semibold">
									Namn:
									<input
										type="text"
										required
										className="block mt-1 w-full border border-red-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
										value={booking.name}
										onChange={e => setBooking(b => ({ ...b, name: e.target.value }))}
									/>
								</label>
								<label className="block text-gray-700 font-semibold">
									Telefon:
									<input
										type="tel"
										required
										className="block mt-1 w-full border border-red-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 bg-white"
										value={booking.phone}
										onChange={e => setBooking(b => ({ ...b, phone: e.target.value }))}
									/>
								</label>
							</div>
						</div>
						{/* Divider */}
						<div className="w-full h-px bg-gradient-to-r from-red-100 via-red-200 to-red-100 my-2 md:my-0 md:w-px md:h-auto hidden md:block" />
						{/* Right: Time slots */}
						<div className="flex flex-col justify-center items-center p-4 sm:p-8 w-full md:min-w-[180px] bg-white/80">
							<div className="text-sm font-semibold text-red-700 mb-2">2. Välj tid</div>
							<div className="flex flex-col gap-2 w-full">
								{timeSlots.map(t => (
									<button
										key={t}
										type="button"
										className={`w-full px-4 py-3 rounded-full font-semibold border transition text-base shadow-sm
											${
												booking.time === t
													? "bg-red-600 text-white border-red-600 shadow-lg"
													: "bg-white text-red-700 border-red-200 hover:bg-red-100"
											}
											${!booking.date ? "opacity-50 pointer-events-none" : ""}
										`}
										disabled={!booking.date}
										onClick={() => setBooking(b => ({ ...b, time: t }))}
									>
										{t}
									</button>
								))}
							</div>
							{booking.error && (
								<div className="text-red-600 mt-2 text-center">{booking.error}</div>
							)}
							<button
								className="glassy-btn glassy-btn-red w-full mt-2"
								type="button"
								disabled={
									booking.loading ||
									!booking.name ||
									!booking.phone ||
									!booking.date ||
									!booking.time
								}
								onClick={handleBooking}
							>
								{booking.loading ? "Skickar..." : "Bekräfta bokning"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}