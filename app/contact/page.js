"use client";
import { useState } from "react";
import MenuBar from "../components/MenuBar";
import BubblesBackground from "../components/BubblesBackground";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSmileBeam } from "react-icons/fa";

const team = [
	{
		name: "Anna Svensson",
		role: "Kundservice",
		img: "/team-anna.jpg",
		quote: "Jag älskar att hjälpa våra kunder till en skinande bil!",
	},
	{
		name: "Johan Karlsson",
		role: "Däckexpert",
		img: "/team-johan.jpg",
		quote: "Inga däckproblem är för stora eller små för oss.",
	},
	{
		name: "Sara Lind",
		role: "Rekondproffs",
		img: "/team-sara.jpg",
		quote: "Detaljerna gör skillnaden – din bil förtjänar det bästa.",
	},
];

export default function ContactPage() {
	const [showBubbles, setShowBubbles] = useState(true);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		sent: false,
		error: "",
	});

	async function handleSubmit(e) {
		e.preventDefault();
		setForm((f) => ({ ...f, sent: false, error: "" }));
		// Simulate sending
		setTimeout(() => {
			setForm((f) => ({ ...f, sent: true }));
		}, 1200);
	}

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
				<section className="w-full max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-accent-dark mb-4 text-center drop-shadow-lg">
						Kontakta oss
					</h1>
					<p className="text-lg text-gray-700 text-center mb-10 max-w-2xl mx-auto">
						Har du frågor, vill boka tid eller bara säga hej? Fyll i
						formuläret eller kontakta oss direkt – vi svarar snabbt och
						alltid med ett leende!
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{/* Contact Form */}
						<form
							onSubmit={handleSubmit}
							className="bg-white/90 rounded-3xl shadow-xl border border-yellow-100 p-8 flex flex-col gap-4 glassy-card"
							style={{
								boxShadow:
									"0 4px 32px 0 rgba(253,202,34,0.08), 0 2px 8px 0 rgba(0,0,0,0.08)",
							}}
						>
							<label className="font-semibold text-accent-dark">
								Namn
								<input
									type="text"
									required
									className="block w-full mt-1 px-4 py-2 rounded-lg border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
									value={form.name}
									onChange={(e) =>
										setForm((f) => ({ ...f, name: e.target.value }))
									}
								/>
							</label>
							<label className="font-semibold text-accent-dark">
								E-post
								<input
									type="email"
									required
									className="block w-full mt-1 px-4 py-2 rounded-lg border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
									value={form.email}
									onChange={(e) =>
										setForm((f) => ({ ...f, email: e.target.value }))
									}
								/>
							</label>
							<label className="font-semibold text-accent-dark">
								Meddelande
								<textarea
									required
									rows={4}
									className="block w-full mt-1 px-4 py-2 rounded-lg border border-yellow-200 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
									value={form.message}
									onChange={(e) =>
										setForm((f) => ({ ...f, message: e.target.value }))
									}
								/>
							</label>
							<button
								type="submit"
								className="glassy-btn glassy-btn-yellow mt-2 font-bold text-lg"
								disabled={form.sent}
							>
								{form.sent
									? "Tack för ditt meddelande!"
									: "Skicka meddelande"}
							</button>
						</form>
						{/* Contact Info */}
						<div className="bg-white/90 rounded-3xl shadow-xl border border-yellow-100 p-8 flex flex-col gap-6 glassy-card">
							<h2 className="text-2xl font-bold text-accent-dark">
								Kontakta oss direkt
							</h2>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-3">
									<div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
										<FaPhone className="w-5 h-5" />
									</div>
									<div>
										<span className="block text-sm font-semibold text-gray-800">
											Telefon
										</span>
										<span className="text-gray-600">
											070-123 45 67
										</span>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
										<FaEnvelope className="w-5 h-5" />
									</div>
									<div>
										<span className="block text-sm font-semibold text-gray-800">
											E-post
										</span>
										<span className="text-gray-600">
											info@varbegsbilvard.se
										</span>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
										<FaMapMarkerAlt className="w-5 h-5" />
									</div>
									<div>
										<span className="block text-sm font-semibold text-gray-800">
											Adress
										</span>
										<span className="text-gray-600">
											Bilvägen 1, 432 00 Varberg
										</span>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<h3 className="text-lg font-semibold text-accent-dark mb-2">
									Möt vårt team
								</h3>
								<div className="flex flex-wrap gap-4">
									{team.map((member) => (
										<div
											key={member.name}
											className="flex flex-col items-center text-center p-4 rounded-lg bg-yellow-50 shadow-md"
										>
											<img
												src={member.img}
												alt={member.name}
												className="w-16 h-16 rounded-full mx-auto mb-2"
											/>
											<h4 className="font-semibold text-gray-800">
												{member.name}
											</h4>
											<p className="text-sm text-gray-600">
												{member.role}
											</p>
											<blockquote className="mt-2 text-gray-700 italic">
												{member.quote}
											</blockquote>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
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
		</div>
	);
}