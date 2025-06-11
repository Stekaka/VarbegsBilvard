"use client";
import { useState } from "react";
import Image from "next/image";
import MenuBar from "../components/MenuBar";

const carwashServices = [
	{
		title: "Premium Handtvätt",
		desc: "Noggrann handtvätt ut- och invändigt, fälgrengöring, dammsugning och fönsterputs.",
		price: "499 kr",
		img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
	},
	{
		title: "Express Utvändig Tvätt",
		desc: "Snabb utvändig tvätt och torkning. Perfekt för dig på språng.",
		price: "249 kr",
		img: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
	},
	{
		title: "Invändig Rengöring",
		desc: "Dammsugning, mattvätt, panelrengöring och fönsterputs invändigt.",
		price: "299 kr",
		img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e",
	},
	{
		title: "Lackskydd & Vax",
		desc: "Skydda lacken med professionellt vax och lackskyddsbehandling.",
		price: "från 799 kr",
		img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
	},
];

function ServiceCard({ title, desc, price, img }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-white/90 rounded-2xl shadow-2xl border border-gray-200 flex flex-col items-center p-0 overflow-hidden hover:scale-[1.03] hover:shadow-3xl transition-transform relative">
			<div className="w-full h-40 relative">
				<Image src={img} alt={title} fill className="object-cover" />
			</div>
			<div className="flex flex-col items-center p-6 w-full">
				<h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
				<p className="text-gray-700 mb-3 text-center">{desc}</p>
				<span className="text-lg font-semibold text-gray-800 mb-4">
					{price}
				</span>
				<button
					onClick={() => setOpen(true)}
					className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-900 transition"
				>
					Läs mer
				</button>
			</div>
			{/* Popup Modal */}
			{open && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
					<div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
						<button
							onClick={() => setOpen(false)}
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 text-2xl"
							aria-label="Stäng"
						>
							&times;
						</button>
						<h3 className="text-xl font-bold mb-4">{title}</h3>
						<p className="text-gray-800">{desc}</p>
						<p className="mt-4 text-lg font-semibold text-gray-900">
							Pris: {price}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default function CarwashPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-4">
			<MenuBar />
			<h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
				Carwash-tjänster
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
				{carwashServices.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
			<section className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-xl border border-gray-200 p-8 mt-8">
				<h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
					Boka tid
				</h2>
				{/* Replace below with your real calendar/booking component */}
				<div className="flex flex-col items-center justify-center">
					<div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
						[Här kan din bokningskalender visas]
					</div>
					<button className="mt-6 px-6 py-3 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-900 transition">
						Boka nu
					</button>
				</div>
			</section>
		</div>
	);
}