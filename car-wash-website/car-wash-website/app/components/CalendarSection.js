"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarSection() {
  const [service, setService] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  function handleBooking(e) {
    e.preventDefault();
    if (service && startDate && time) {
      setMessage(
        `Your booking for ${service} on ${startDate.toLocaleDateString()} at ${time} is confirmed!`
      );
      setService("");
      setStartDate(null);
      setTime("");
    } else {
      setMessage("Please select a service, date, and time.");
    }
  }

  return (
    <div>
      <h2>Book a Time</h2>
      <form
        onSubmit={handleBooking}
        className="flex flex-col gap-3 max-w-xs"
      >
        <select
          value={service}
          onChange={e => setService(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Select a service</option>
          <option value="Carwash">Carwash</option>
          <option value="Tires">Tires</option>
          <option value="Service">Service</option>
        </select>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          minDate={new Date()}
          placeholderText="Select a date"
          className="p-2 border rounded"
        />
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white rounded p-2">
          Book Now
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}