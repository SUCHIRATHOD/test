import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img 
            src="https://thumbs.dreamstime.com/b/yummy-emoticon-happy-smile-tongue-enjoying-great-taste-delicious-logo-isolated-white-background-vector-illustration-131395410.jpg" 
            alt="Licious Logo" 
            className="footer-logo" 
          />
          <h5>EXPERIENCE LICIOUS APP ON MOBILE</h5>
          <div className="app-icons">
            <img 
              src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" 
              alt="App Store" 
              className="app-icon" 
            />
            <img 
              src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" 
              alt="Play Store" 
              className="app-icon" 
            />
          </div>
        

        <div className="footer-section">
          <h5>KEEP IN TOUCH</h5>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.licious.in/image/rebranding/png/twitter-homepage.png" 
                alt="Twitter" 
                className="social-icon" 
              />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.licious.in/image/rebranding/png/fb-homepage.png" 
                alt="Facebook" 
                className="social-icon" 
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.licious.in/image/rebranding/png/insta-homepage.png" 
                alt="Instagram" 
                className="social-icon" 
              />
            </a>
          </div>
        </div>
        </div>
        <div className="footer-section">
          <h5>USEFUL LINKS</h5>
          <ul>
            <li>Why Licious?</li>
            <li>Refer & Earn</li>
            <li>Licious Cash & Cash+</li>
            <li>Careers</li>
            <li>BLOG</li> 
             </ul>
             </div>
            <div>
              <ul>
            <li>About Us</li>
            <li>Bug Bounty Guidelines</li>
            <li>T&C</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Reschedule Policy</li>
            <li>FSSC 22000 Certification</li>
            <li>SA8000 Certification</li>
            <li>CSR Policy</li>
            <li>Sitemap</li>
            </ul>
        </div>

        <div className="footer-section contact-section">
          <h5>CONTACT US</h5>
          <p>Call: 1800-4190-786</p>
          <p>Email: <a href="mailto:talktous@licious.com">talktous@licious.com</a></p>
          <h6>REGISTERED OFFICE ADDRESS:</h6>
          <p>DELIGHTFUL GOURMET PVT LTD</p>
          <p>Maruthi Infotech Center 11/1, 12/1 B wing 1st Floor</p>
          <p>Amarjyothi layout Intermediate ring road</p>
          <p>Domlur, B.B.M.P East, Karnataka-560071</p>
          <p>Bangalore, Karnataka - 560071</p>
          <div className="payment-icons">
           
            <img src="https://www.licious.in/image/rebranding/png/3-dsecure.png" alt="Secure Payment" />
          </div>
          <p>HAVE SECURITY CONCERN?</p>
          <p>Email us to: <a href="mailto:security@licious.com">security@licious.com</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;         