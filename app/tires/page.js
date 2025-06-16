"use client";
import { useState, useEffect } from "react";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";
import { FaSnowflake, FaTools, FaExchangeAlt, FaWarehouse, FaStar } from "react-icons/fa";

const tireServices = [
	{
		title: "Däckbyte",
		price: "fr 299 kr",
		icon: <FaExchangeAlt />,
		desc: "Snabbt och säkert byte mellan sommar- och vinterdäck. Vi kontrollerar även däcktryck och mönsterdjup.",
	},
	{
		title: "Däckhotell",
		price: "fr 499 kr/säsong",
		icon: <FaWarehouse />,
		desc: "Förvara dina däck svalt, torrt och säkert hos oss. Vi tvättar och kontrollerar däcken inför varje säsong.",
	},
	{
		title: "Balansering",
		price: "fr 199 kr/hjul",
		icon: <FaTools />,
		desc: "Vi balanserar dina hjul för en tystare och säkrare körning samt minskat däckslitage.",
	},
	{
		title: "Punkteringslagning",
		price: "fr 299 kr",
		icon: <FaStar />,
		desc: "Snabb och professionell lagning av punkterade däck så att du kan köra vidare tryggt.",
	},
	{
		title: "Nya däck & fälgar",
		price: "Offert",
		icon: <FaSnowflake />,
		desc: "Vi erbjuder ett brett sortiment av nya däck och fälgar från ledande märken. Kontakta oss för offert!",
	},
];

export default function TiresPage() {
	const [showBubbles, setShowBubbles] = useState(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("showBubbles");
			return stored !== null ? stored === "true" : true;
		}
		return true;
	});

	useEffect(() => {
		const stored = localStorage.getItem("showBubbles");
		if (stored !== null) setShowBubbles(stored === "true");
	}, []);

	useEffect(() => {
		localStorage.setItem("showBubbles", showBubbles);
	}, [showBubbles]);

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
						Däckservice & Däckhotell
					</h1>
					<p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
						Vi erbjuder allt inom däck – från däckbyte och förvaring till nya däck och fälgar. Alltid med personlig service, premiumkänsla och trygghet för dig och din bil.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{tireServices.map((s) => (
							<div
								key={s.title}
								className="w-full max-w-xs mx-auto bg-white/90 rounded-3xl shadow-xl border border-yellow-100 p-6 flex flex-col items-center transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-200"
								style={{
									boxShadow:
										"0 4px 32px 0 rgba(253,202,34,0.06), 0 2px 8px 0 rgba(0,0,0,0.08)",
								}}
							>
								<div className="mb-4 text-4xl text-accent drop-shadow-lg">
									{s.icon}
								</div>
								<h2 className="text-xl font-bold text-accent-dark mb-2 text-center">
									{s.title}
								</h2>
								<div className="mb-4">
									<span
										className="inline-block bg-gradient-to-r from-gold-light to-gold-dark text-white text-sm font-bold px-4 py-1 rounded-full shadow"
										style={{
											background:
												"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
											color: "#fff",
										}}
									>
										{s.price}
									</span>
								</div>
								<p className="text-gray-700 text-center mb-6">
									{s.desc}
								</p>
								<button
									className="glassy-btn glassy-btn-yellow mt-auto text-center font-bold w-full"
									onClick={() => (window.location.href = "/contact")}
								>
									Kontakta oss
								</button>
							</div>
						))}
					</div>
				</section>
				{/* Premium info section */}
				<section className="max-w-3xl mx-auto mb-16 px-4 pt-10 pb-10 rounded-2xl shadow-inner bg-white/80 text-center">
					<h2 className="text-2xl font-bold text-accent-dark mb-4 drop-shadow-lg">
						Varför välja Varbegs Bilvård för dina däck?
					</h2>
					<p
						className="text-gray-800 text-lg mb-4 drop-shadow-lg"
						style={{
							textShadow:
								"0 4px 16px rgba(0,0,0,0.10), 0 1.5px 0px rgba(0,0,0,0.08)",
						}}
					>
						Vi är Varbergs mest pålitliga däckpartner. Med moderna maskiner, kunnig personal och fokus på kvalitet tar vi hand om dina däck – året om. Vi erbjuder flexibla tider, snabb service och alltid ett leende på köpet.
					</p>
					<div className="flex flex-wrap justify-center gap-4 mt-6">
						<span className="inline-block px-6 py-2 rounded-full bg-accent-gradient text-white font-semibold shadow"
							style={{
								background:
									"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
								color: "#fff",
							}}
						>
							Däckhotell med fullservice
						</span>
						<span className="inline-block px-6 py-2 rounded-full bg-accent-gradient text-white font-semibold shadow"
							style={{
								background:
									"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
								color: "#fff",
							}}
						>
							Snabbt däckbyte
						</span>
						<span className="inline-block px-6 py-2 rounded-full bg-accent-gradient text-white font-semibold shadow"
							style={{
								background:
									"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
								color: "#fff",
							}}
						>
							Nya däck & fälgar
						</span>
						<span className="inline-block px-6 py-2 rounded-full bg-accent-gradient text-white font-semibold shadow"
							style={{
								background:
									"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
								color: "#fff",
							}}
						>
							Personlig service
						</span>
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
					&copy; {new Date().getFullYear()} Varbegs Bilvård. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
