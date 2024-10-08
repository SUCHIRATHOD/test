import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Rights.css'; // Optional: Import your CSS file

const Rights = () => {
  return (
    <Container className="text-center my-5 custom-container">
      <h4 className="custom-title">© 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.</h4>
      <p className="custom-text">
        Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.
      </p>
    </Container>
  );
};

export default Rights;
