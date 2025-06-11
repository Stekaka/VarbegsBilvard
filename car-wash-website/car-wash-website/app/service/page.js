"use client";
import { useState } from "react";
import Image from "next/image";
import MenuBar from "../components/MenuBar";

export default function ServicePage() {
  return (
    <div>
      <MenuBar />
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Service</h1>
        <p>
          We offer oil changes, brake service, and general maintenance for your vehicle.
          Our experienced technicians ensure your car is safe and running smoothly.
        </p>
        {/* Add more details, images, pricing, etc. here */}
      </div>
    </div>
  );
}