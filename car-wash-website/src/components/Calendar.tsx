import React, { useState } from 'react';

const Calendar: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(new Date(event.target.value));
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (selectedDate && selectedTime) {
            alert(`Appointment booked for ${selectedDate.toDateString()} at ${selectedTime}`);
        } else {
            alert('Please select both a date and a time.');
        }
    };

    return (
        <div className="calendar">
            <h2>Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Date:
                    <input type="date" onChange={handleDateChange} required />
                </label>
                <label>
                    Select Time:
                    <select onChange={handleTimeChange} required>
                        <option value="">--Select Time--</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                    </select>
                </label>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default Calendar;