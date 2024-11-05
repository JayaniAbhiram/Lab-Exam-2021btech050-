import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { id: 1, src: 'https://via.placeholder.com/300.png?text=Image+1', alt: 'Image 1' },
        { id: 2, src: 'https://via.placeholder.com/300.png?text=Image+2', alt: 'Image 2' },
        { id: 3, src: 'https://via.placeholder.com/300.png?text=Image+3', alt: 'Image 3' },
        { id: 4, src: 'https://via.placeholder.com/300.png?text=Image+4', alt: 'Image 4' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={prevSlide}>❮</button>
            <div className="carousel-images">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="carousel-button" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Home;
