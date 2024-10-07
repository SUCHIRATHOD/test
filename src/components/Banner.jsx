import React from 'react';
import '../styles/Banner.css'; // Import the CSS file for styles
import { Container } from 'react-bootstrap';

function Banner() {
    return (
        <Container fluid className="banner-container">
            <div className="banner">
                <div className="banner-text">
                    <h1 className="banner-title">Delicious Meats</h1>
                    <p className="banner-subtitle">Discover the best selection of fresh meats.</p>
                </div>
            </div>
        </Container>
    );
}

export default Banner;