import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Categories.css'; // Import custom CSS file

const Categories = () => {
  const images = [
    "https://media.istockphoto.com/id/1187958446/photo/fresh-skipjack-tuna-at-fishing-harbour-for-sale.jpg?s=612x612&w=0&k=20&c=LyT-BAONTzS1wBgzIfUoJU0xJic1fYP4EPXLn71ixus=",
    "https://media.istockphoto.com/id/463618853/photo/raw-duck-legs.jpg?s=612x612&w=0&k=20&c=bywljgQ3Ju5VMtdy2C9LtGZfU7-OopVH_1h44IppwWM=",
    "https://freerangestock.com/sample/88199/raw-meat-on-white-plate-in-kitchen.jpg",
    "https://media.istockphoto.com/id/591792566/photo/fresh-raw-prawns-on-black-plate.jpg?s=612x612&w=0&k=20&c=Igr5qh9JNwLEkICGcZqhAxZe3ukonJf5RzlUpsgEqbc=",
    "https://thumbs.dreamstime.com/b/raw-chicken-plate-9246663.jpg",
    "https://media.istockphoto.com/id/173234780/photo/group-of-brown-raw-eggs-one-is-broken-isolated-white.jpg?s=612x612&w=0&k=20&c=Ezdfb242lOnxeYPA2nyEX6IKgjDpIfXI-g-in-ShSnE=",
  ];

  const imageNames = [
    "Fresh Skipjack Tuna",
    "Raw Duck Legs",
    "Raw Meat",
    "Fresh Raw Prawns",
    "Raw Chicken",
    "Brown Raw Eggs",
  ];

  return (
    <Container className="my-4">
      <Row>
        <Col className="mx-0">
          <h4 className="text-start mb-0">Shop by Categories</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {images.map((image, index) => (
          <Col xs={6} md={4} lg={2} key={index} className="d-flex flex-column align-items-center mb-3">
            <img src={image} alt={`Category ${index + 1}`} className="category-image" />
            <span>{imageNames[index]}</span>
          </Col>
        ))}
        {/* Add another column with the same images and names */}
        {images.map((image, index) => (
          <Col xs={6} md={4} lg={2} key={`duplicate-${index}`} className="d-flex flex-column align-items-center mb-3">
            <img src={image} alt={`Category ${index + 1}`} className="category-image" />
            <span>{imageNames[index]}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
