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
  const picture = [
    "https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/53148/shish-kebab-meat-skewer-vegetable-skewer-meat-products-53148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const imageNames = [
    "Fresh Skipjack Tuna",
    "Raw Duck Legs",
    "Raw Meat",
    "Fresh Raw Prawns",
    "Raw Chicken",
    "Brown Raw Eggs",
  ];
  const pictureNames = [
    "Bread",
    "Vegitables",
    "Burgur",
    "Momos",
    "Past",
    "Fish",
  ]

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
        {picture.map((image, index) => (
          <Col xs={6} md={4} lg={2} key={`duplicate-${index}`} className="d-flex flex-column align-items-center mb-3">
            <img src={image} alt={`Category ${index + 1}`} className="category-image" />
            <span>{pictureNames[index]}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
