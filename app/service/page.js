"use client";
import { useState } from "react";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";
import { FaOilCan, FaFilter, FaBatteryFull, FaFan, FaSmile, FaStar } from "react-icons/fa";

const services = [
	{
		title: "Oljebyte",
		icon: <FaOilCan />,
		desc: "Snabbt och professionellt oljebyte med kvalitetsolja och nytt filter. Vi återvinner alltid din gamla olja.",
		highlight: "Förlänger motorns livslängd!",
	},
	{
		title: "Byte av oljefilter",
		icon: <FaFilter />,
		desc: "Vi byter oljefilter i samband med oljebyte för optimal motorgång och skydd mot slitage.",
		highlight: "Renare motor, bättre prestanda!",
	},
	{
		title: "Batteriservice",
		icon: <FaBatteryFull />,
		desc: "Vi testar, laddar och byter bilbatteri vid behov. Starta tryggt året om!",
		highlight: "Alltid startklar bil!",
	},
	{
		title: "Byte av kupé- & luftfilter",
		icon: <FaFan />,
		desc: "Vi byter kupé- och luftfilter för bättre luft i bilen och optimal motoreffekt.",
		highlight: "Frisk luft & effektiv motor!",
	},
];

const badges = [
	{ icon: <FaSmile />, text: "Personlig service" },
	{ icon: <FaStar />, text: "Premiumprodukter" },
	{ icon: <FaOilCan />, text: "Miljövänlig olja" },
	{ icon: <FaBatteryFull />, text: "Snabb batteriservice" },
];

export default function ServicePage() {
	const [showBubbles, setShowBubbles] = useState(true);

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex flex-col overflow-x-hidden relative">
			<MenuBar showBubbles={showBubbles} setShowBubbles={setShowBubbles} />
			{showBubbles && <BubblesBackground />}
			{/* Decorative overlay */}
			<div
				className="pointer-events-none fixed inset-0 z-0"
				aria-hidden
			>
				<div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-100 rounded-full blur-3xl opacity-40" />
				<div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-yellow-200 rounded-full blur-2xl opacity-30" />
				<div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gray-600 rounded-full blur-2xl opacity-30" />
			</div>
			<main className="flex-1 w-full flex flex-col relative z-10 pt-20">
				<section className="w-full max-w-5xl mx-auto px-4 py-16">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-accent-dark mb-4 text-center drop-shadow-lg">
						Oljebyte & Service
					</h1>
					<p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
						Vi erbjuder snabb och trygg service för din bil – från oljebyte och filter till batteri och luftfilter. Alltid med premiumkänsla, miljöfokus och personlig service.
					</p>
					{/* Kontakta oss button */}
					<div className="flex justify-center mb-10">
						<a
							href="/contact"
							className="glassy-btn glassy-btn-yellow font-bold text-lg px-8 py-3 rounded-full shadow transition hover:scale-105"
							style={{
								background: "linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
								color: "#fff",
							}}
						>
							Kontakta oss
						</a>
					</div>
					{/* 2-column grid for services */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{services.map((s) => (
							<ServiceCard key={s.title} {...s} />
						))}
					</div>
				</section>
				{/* Why choose us */}
				<section className="max-w-3xl mx-auto mb-16 px-4 pt-10 pb-10 rounded-2xl shadow-inner bg-white/80 text-center">
					<h2 className="text-2xl font-bold text-accent-dark mb-4 drop-shadow-lg">
						Varför välja oss?
					</h2>
					<p
						className="text-gray-800 text-lg mb-6 drop-shadow-lg"
						style={{
							textShadow:
								"0 4px 16px rgba(0,0,0,0.10), 0 1.5px 0px rgba(0,0,0,0.08)",
						}}
					>
						Vi använder alltid kvalitetsdelar och miljövänliga produkter. Hos oss får du snabb service, tydliga priser och ett leende på köpet!
					</p>
					<div className="flex flex-wrap justify-center gap-4 mt-6">
						{badges.map((b, i) => (
							<span
								key={b.text}
								className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent-gradient text-white font-semibold shadow-lg animate-float"
								style={{
									background:
										"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
									color: "#fff",
									animationDelay: `${i * 0.2}s`,
								}}
							>
								<span className="text-lg">{b.icon}</span>
								{b.text}
							</span>
						))}
					</div>
				</section>
			</main>
			{/* Footer */}
			<footer
				className="w-full bg-gray-900/80 backdrop-blur-xl border-t border-white/20 text-gray-100 text-center py-6 mt-12 rounded-t-3xl shadow-inner"
				style={{
					boxShadow: "0 -8px 32px 0 rgba(0,0,0,0.10)",
					background:
						"linear-gradient(90deg, rgba(30,41,59,0.92) 0%, rgba(30,41,59,0.85) 100%)",
					borderTopLeftRadius: "1.5rem",
					borderTopRightRadius: "1.5rem",
				}}
			>
				<p className="text-base font-medium tracking-wide drop-shadow">
					&copy; {new Date().getFullYear()} Varbegs Bilvård. All rights
					reserved.
				</p>
			</footer>
			{/* Animations */}
			<style jsx global>{`
				@keyframes float {
					0%,
					100% {
						transform: translateY(0);
					}
					50% {
						transform: translateY(-8px);
					}
				}
				.animate-float {
					animation: float 3.2s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}

// Service card component
function ServiceCard({ title, desc, highlight, icon }) {
	return (
		<div className="bg-white/90 rounded-3xl shadow-xl border border-yellow-100 p-8 flex flex-col gap-4 glassy-card hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-200 transition-all duration-300 max-w-md mx-auto items-center text-center">
			<div className="text-4xl text-accent drop-shadow mb-2">{icon}</div>
			<h2 className="text-xl font-bold text-accent-dark mb-1">{title}</h2>
			<p className="text-gray-700 mb-2">{desc}</p>
			<span
				className="inline-block bg-gradient-to-r from-gold-light to-gold-dark text-white text-xs font-bold px-3 py-1 rounded-full shadow"
				style={{
					background: "linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
					color: "#fff",
				}}
			>
				{highlight}
			</span>
		</div>
	);
}