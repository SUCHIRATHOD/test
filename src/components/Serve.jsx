import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Serve.css'; // Import the CSS file

const Serve = () => {
  const cities = [
    'Bengaluru', 'NCR', 'Hyderabad', 'Chandigarh', 
    'Panchkula', 'Mohali', 'Mumbai', 'Pune', 
    'Chennai', 'Coimbatore', 'Jaipur', 'Cochin', 
    'Vijayawada', 'Khammam', 'Kolkata', 
    'Lucknow', 'Kanpur', 'Nagpur'
  ];

  return (
    <div className="serve-main">
        <div className="cities-box">
          <h5 className="cities-title" style={{fontSize:'20px'}}>CITIES WE SERVE</h5>
          <Row className="cities-container">
            {cities.map((city, index) => (
              <Col xs={4} md={2} key={index} className="city-col">
                <div className="city-box">{city}</div>
              </Col>
            ))}
          </Row>
        </div>
    </div>
  );
}

export default Serve;
