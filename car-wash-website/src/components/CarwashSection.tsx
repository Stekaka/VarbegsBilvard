import React from 'react';

const CarwashSection: React.FC = () => {
    return (
        <section className="carwash-section">
            <h2>Our Car Wash Services</h2>
            <p>We offer a variety of car wash services to keep your vehicle looking its best.</p>
            <ul>
                <li>Basic Wash</li>
                <li>Deluxe Wash</li>
                <li>Interior Cleaning</li>
                <li>Wax and Polish</li>
                <li>Detailing Services</li>
            </ul>
            <p>Book your appointment today and enjoy a sparkling clean car!</p>
        </section>
    );
};

export default CarwashSection;