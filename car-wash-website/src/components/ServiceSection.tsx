import React from 'react';

const ServiceSection: React.FC = () => {
    return (
        <section className="service-section">
            <h2>Our Services</h2>
            <ul>
                <li>Oil Change</li>
                <li>Brake Service</li>
                <li>Transmission Service</li>
                <li>Battery Replacement</li>
                <li>Fluid Check and Replacement</li>
            </ul>
        </section>
    );
};

export default ServiceSection;