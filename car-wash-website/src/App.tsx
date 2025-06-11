import React from 'react';
import CarwashSection from './components/CarwashSection';
import TiresSection from './components/TiresSection';
import ServiceSection from './components/ServiceSection';
import Calendar from './components/Calendar';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Our Car Wash</h1>
            <CarwashSection />
            <TiresSection />
            <ServiceSection />
            <Calendar />
        </div>
    );
};

export default App;