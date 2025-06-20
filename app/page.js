"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BubblesBackground from "./components/BubblesBackground";
import MenuBar from "./components/MenuBar";

// --- HERO SLIDES ---
const heroSlides = [
	{
		img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
		title: "Din biltvätt i Varberg",
		subtitle: "Välkommen till Varbegs Bilvård",
		desc: "Vi erbjuder såväl utvändig- som invändig tvätt av bilar, transportbilar och lastbilar.",
		cta: { text: "Boka nu", href: "/carwash" },
		cta2: { text: "Vad säger våra kunder", href: "#testimonials" },
	},
	{
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
		title: "Miljövänlig & effektiv tvätt och rekond",
		subtitle: "In- och utvändig tvätt",
		desc: "Vi tar hand om din bil på bästa möjliga sätt och ger den en yttre och inre finish som gör att den återfår sin forna glans.",
		cta: { text: "Boka nu", href: "/carwash" },
		cta2: { text: "Vad säger våra kunder", href: "#testimonials" },
	},
];

// --- SERVICES ---
const services = [
	{
		title: "Utvändig Rekond",
		price: "1600:-",
		time: "4 tim",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
		features: [
			"Polering",
			"Motortvätt",
			"Handtvätt",
			"Rubbing",
			"Maskinpolering",
			"Hårdvax",
		],
		link: "/carwash",
	},
	{
		title: "Invändig Rekond",
		price: "1200:-",
		time: "3 tim",
		img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
		features: [
			"Handtvätt & fälgtvätt",
			"Komplett invändig rengöring",
			"Textiltvätt av säten, golv och dörrsidor",
			"Skinnrengöring",
			"Kläddseltvätt",
		],
		link: "/carwash",
	},
	{
		title: "Diamant",
		price: "239:-",
		time: "",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
		features: [
			"Utvändig handtvätt",
			"Lätt avfettning",
			"Handtvätt med schampo",
			"Fälg tvätt",
			"Torka bilen",
			"Torka dörrfalsar",
			"Mattor tvätt",
			"Dammsugning",
		],
		link: "/carwash",
	},
];

// --- TESTIMONIALS ---
const testimonials = [
	{
		name: "Annika N.",
		text: "Så har det hänt igen - Mohammed och hans medarbetare har gått min bil att se ut som att den är ny! Helt fantastiskt - tusen tack!",
	},
	{
		name: "Johanna J.",
		text: "Tvättat min bil på Varbegs Bilvård i flera år, de gör ett grymt jobb till ett rejält lågt pris. Tack snälla ni!",
	},
	{
		name: "Björn G.",
		text: "Fick en ren och städad bil åter och nöjd kund.",
	},
	{
		name: "Elin O.",
		text: "Invändig rekond. Dom ringde och ville att vi skulle hämta bilen lite senare då de ville köra igenom den en gång till pga. Att de inte fick bort en fläck på första försöket. Vi är supernöjda! Bra service och fint resultat!",
	},
];

export default function Home() {
	const [slide, setSlide] = useState(0);
	const [showBubbles, setShowBubbles] = useState(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("showBubbles");
			return stored !== null ? stored === "true" : true;
		}
		return true;
	});

	// On mount, read from localStorage
	useEffect(() => {
		const stored = localStorage.getItem("showBubbles");
		if (stored !== null) setShowBubbles(stored === "true");
	}, []);

	// When showBubbles changes, save to localStorage
	useEffect(() => {
		localStorage.setItem("showBubbles", showBubbles);
	}, [showBubbles]);

	// Simple hero slider logic
	function nextSlide() {
		setSlide((s) => (s + 1) % heroSlides.length);
	}
	function prevSlide() {
		setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex flex-col overflow-x-hidden">
			{/* MENU BAR */}
			<MenuBar showBubbles={showBubbles} setShowBubbles={setShowBubbles} />
			{showBubbles && <BubblesBackground />}
			<main className="flex-1 w-full flex flex-col">
				{/* HERO SLIDER */}
				<section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
					<Image
						src={heroSlides[slide].img}
						alt="Hero"
						fill
						priority
						className="object-cover object-center transition-all duration-700 hero-zoom-animate"
					/>
					<div className="absolute inset-0 bg-gray-900/80" />
					<div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
						<h6 className="text-white text-lg mb-2 font-semibold tracking-widest uppercase drop-shadow">
							{heroSlides[slide].subtitle}
						</h6>
						<h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
							{heroSlides[slide].title}
						</h1>
						<p className="text-xl sm:text-2xl text-gray-100 font-medium max-w-2xl mb-8 drop-shadow">
							{heroSlides[slide].desc}
						</p>
						{/* HERO SLIDER BUTTONS */}
						<div className="flex gap-4 justify-center">
							<Link
								href={heroSlides[slide].cta.href}
								style={{
									background:
										"linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))",
									color: "#fff",
								}}
								className="px-7 py-3 rounded-full font-semibold text-lg shadow-xl"
							>
								{heroSlides[slide].cta.text}
							</Link>
							<Link
								href={heroSlides[slide].cta2.href}
								className="px-7 py-3 rounded-full font-semibold text-lg shadow bg-white/80 text-accent border border-white/30 hover:bg-white/90 hover:text-accent-dark transition-all duration-200"
								style={{
									boxShadow: "0 2px 12px 0 rgba(253,202,34,0.10)",
									textShadow: "0 1px 4px rgba(0,0,0,0.10)",
								}}
							>
								{heroSlides[slide].cta2.text}
							</Link>
						</div>
					</div>
					{/* Slider arrows */}
					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group outline-none focus:outline-none border-none bg-transparent p-0 m-0"
						aria-label="Föregående"
						style={{ background: "transparent", border: "none", boxShadow: "none" }}
					>
						<span
							className="text-white transition-all duration-200 group-hover:text-accent"
							style={{
								fontSize: "2.25rem",
								display: "inline-block",
								transition: "all 0.2s",
							}}
						>
							<span
								className="group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_white]"
								style={{
									display: "inline-block",
									transition: "transform 0.2s, filter 0.2s",
								}}
							>
								&#8592;
							</span>
						</span>
					</button>
					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group outline-none focus:outline-none border-none bg-transparent p-0 m-0"
						aria-label="Nästa"
						style={{ background: "transparent", border: "none", boxShadow: "none" }}
					>
						<span
							className="text-white transition-all duration-200 group-hover:text-accent"
							style={{
								fontSize: "2.25rem",
								display: "inline-block",
								transition: "all 0.2s",
							}}
						>
							<span
								className="group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_white]"
								style={{
									display: "inline-block",
									transition: "transform 0.2s, filter 0.2s",
								}}
							>
								&#8594;
							</span>
						</span>
					</button>
				</section>
				{/* ABOUT US SECTION */}
				<section className="max-w-3xl mx-auto mb-12 px-4 pt-30 pb-20">
					<h2 className="text-3xl font-bold text-accent-dark mb-4 text-center drop-shadow-lg">
						Varför välja Varbegs Bilvård?
					</h2>
					<p
						className="text-gray-800 text-lg text-center drop-shadow-lg"
						style={{
							textShadow:
								"0 4px 16px rgba(0,0,0,0.18), 0 1.5px 0px rgba(0,0,0,0.10)",
						}}
					>
						Vi är Varbergs mest pålitliga bilvårdscenter med passion för kvalitet och service.
						Vårt erfarna team använder miljövänliga produkter och modern teknik för att ge din bil den bästa omsorgen.
						Vi erbjuder flexibla tider, personlig service och alltid ett leende på köpet.
						Välj oss för ett skinande rent resultat – varje gång!
					</p>
				</section>

				{/* SERVICE CARDS */}
				<section className="w-full max-w-6xl mx-auto px-4 py-8 z-20 relative pb-20">
					<h3 className="text-2xl font-bold text-accent-dark mb-8 text-center">
						Våra tjänster & priser
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{services.map((s) => (
							<div
								key={s.title}
								className="relative bg-white/95 rounded-2xl shadow-2xl hover:shadow-yellow-200 border border-gray-100 p-0 flex flex-col overflow-hidden transition-all duration-300 group"
							>
								<div className="relative h-40 w-full">
									<Image src={s.img} alt={s.title} fill className="object-cover" />
									<div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
										{s.price}
									</div>
									<div className="absolute top-3 right-3 bg-white text-accent-dark px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
										{s.time}
									</div>
								</div>
								<div className="p-6 flex-1 flex flex-col">
									<h4 className="text-xl font-semibold text-accent-dark mb-2">
										{s.title}
									</h4>
									<ul className="flex-1 text-gray-700 mb-4">
										{s.features.map((f) => (
											<li key={f} className="flex items-center mb-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-5 w-5 text-accent mr-2"
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
									<Link
										href={s.link}
										className="glassy-btn glassy-btn-yellow mt-auto text-center"
									>
										Boka nu
									</Link>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* GIFT CARD SECTION */}
				<section
					className="w-full max-w-full mx-auto px-4 py-20 min-h-[400px] flex flex-col items-center justify-center gap-6 rounded-2xl shadow-inner mb-12 text-center"
					style={{
						backgroundImage: "url('/CarbonBg.png')",
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundAttachment: "fixed",
					}}
				>
					<h4 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
						Köp presentkort hos Varbegs Bilvård
					</h4>
					<p className="text-lg text-white/90 font-medium max-w-2xl mb-6 drop-shadow">
						Ge bort ett skinande rent fordon! Våra presentkort gäller på alla våra tjänster.
					</p>
					<Link
						href="/giftcards"
						className="inline-block px-8 py-3 rounded-full font-semibold text-lg shadow-xl bg-accent-gradient text-white backdrop-blur-md bg-opacity-80 border border-white/30 hover:scale-105 transition-all duration-200"
						style={{
							boxShadow: "0 4px 32px 0 rgba(253,202,34,0.18), 0 1.5px 0 0 rgba(0,0,0,0.04)",
							textShadow: "0 2px 8px rgba(0,0,0,0.18)",
						}}
						role="button"
						tabIndex={0}
					>
						Köp här
					</Link>
				</section>

				{/* TESTIMONIALS */}
				<section id="testimonials" className="w-full max-w-5xl mx-auto px-4 py-16">
					<h4 className="text-2xl font-bold text-accent-dark mb-8 text-center">
						Vad säger våra kunder
					</h4>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{testimonials.map((t, i) => (
							<div
								key={i}
								className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
							>
								<p className="text-gray-800 italic mb-4 text-center">&quot;{t.text}&quot;</p>
								<div className="font-bold text-accent-dark">{t.name}</div>
							</div>
						))}
					</div>
				</section>
			</main>
			{/* FOOTER */}
			<footer
				className="w-full bg-gray-900/80 backdrop-blur-xl border-t border-white/20 text-gray-100 text-center py-6 mt-12 rounded-t-3xl shadow-inner"
				style={{
					boxShadow: "0 -8px 32px 0 rgba(0,0,0,0.10)",
					background: "linear-gradient(90deg, rgba(30,41,59,0.92) 0%, rgba(30,41,59,0.85) 100%)",
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