"use client";
import Image from "next/image";
import MenuBar from "../components/MenuBar";
import CalendarSection from "../components/CalendarSection";

const tireServices = [
	{
		title: "Däckbyte",
		desc: "Snabbt och säkert byte av sommar- och vinterdäck.",
		price: "fr. 350 kr",
		time: "30 min",
		img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
		features: [
			"Byte av alla fyra däck",
			"Kontroll av lufttryck",
			"Åtdragning med momentnyckel",
		],
	},
	{
		title: "Däckbalansering",
		desc: "Vi balanserar dina hjul för en tyst och säker körning.",
		price: "fr. 200 kr",
		time: "20 min",
		img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		features: [
			"Balansering av hjul",
			"Vibrationstest",
			"Montering & demontering",
		],
	},
	{
		title: "Däckhotell",
		desc: "Förvara dina däck svalt, torrt och försäkrat hos oss.",
		price: "fr. 495 kr/säsong",
		time: "Säsong",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		features: [
			"Förvaring inomhus",
			"Försäkring ingår",
			"Tvätt av däck & fälg",
		],
	},
];

export default function TiresPage() {
	return (
		<>
			<MenuBar />
			<main className="flex-1 w-full flex flex-col bg-gradient-to-br from-yellow-50 via-white to-gray-100 min-h-screen">
				{/* Hero Section */}
				<section className="relative w-full min-h-[350px] flex items-center justify-center overflow-hidden mb-12">
					<Image
						src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
						alt="Däckservice"
						fill
						priority
						className="object-cover object-center"
						style={{ zIndex: 1 }}
					/>
					<div
						className="absolute inset-0 bg-gray-900/70"
						style={{ zIndex: 2 }}
					/>
					<div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
						<h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
							Däckservice & Däckhotell
						</h1>
						<p className="text-xl sm:text-2xl text-gray-100 font-medium max-w-2xl mb-6 drop-shadow">
							Tryggt, snabbt och smidigt – året runt. Boka tid för däckbyte,
							balansering eller förvaring.
						</p>
					</div>
				</section>

				{/* Services Section */}
				<section className="w-full max-w-6xl mx-auto px-4 py-8 z-20 relative pb-20">
					<h2 className="text-3xl font-bold text-yellow-900 mb-8 text-center drop-shadow-lg">
						Våra däck-tjänster
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{tireServices.map((s) => (
							<div
								key={s.title}
								className="relative bg-white/95 rounded-2xl shadow-2xl hover:shadow-yellow-200 border border-gray-100 p-0 flex flex-col overflow-hidden transition-all duration-300 group"
							>
								<div className="relative h-40 w-full">
									<Image
										src={s.img}
										alt={s.title}
										fill
										className="object-cover"
									/>
									<div className="absolute top-3 left-3 bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
										{s.price}
									</div>
									<div className="absolute top-3 right-3 bg-white text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
										{s.time}
									</div>
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<h4 className="text-xl font-semibold text-yellow-900 mb-2">
										{s.title}
									</h4>
									<p className="text-gray-700 mb-3">{s.desc}</p>
									<ul className="flex-1 text-gray-700 mb-4">
										{s.features.map((f) => (
											<li key={f} className="flex items-center mb-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-yellow-600 mr-2"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 00-2 0v6a1 1 0 002 0V5zm-1 10a1 1 0 100-2 1 1 0 000 2z"
														clipRule="evenodd"
													/>
												</svg>
												{f}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Booking Section */}
				<section className="w-full max-w-3xl mx-auto px-4 py-12">
					<h3 className="text-2xl font-bold text-yellow-900 mb-4 text-center drop-shadow-lg">
						Boka tid för däckservice
					</h3>
					<p className="text-gray-800 text-lg text-center mb-8">
						Välj en tid som passar dig för däckbyte, balansering eller förvaring.
						Vi hjälper dig snabbt och säkert!
					</p>
					<CalendarSection />
				</section>
			</main>
		</>
	);
}
