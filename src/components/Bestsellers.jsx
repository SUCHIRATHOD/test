import React from 'react';
import '../styles/Bestsellers.css'; // Import the CSS file

const Bestsellers = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/23876843/pexels-photo-23876843/free-photo-of-meat-for-cooking-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Chicken piece",
      weight: "150 g",
      pieces: "12-18 Pieces",
      serves: "Serves4",
      price: "195 ₹",
      offerPrice: "179",
      discount: "8%"
    },
    {
      image: "https://images.pexels.com/photos/23876843/pexels-photo-23876843/free-photo-of-meat-for-cooking-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Mutton Rogan",
      weight: "1 kg",
      pieces: "8-10 Pieces",
      serves: "Serves5",
      price: "650 ₹",
      offerPrice: "599",
      discount: "8%"
    },
    {
      image: "https://images.pexels.com/photos/23876843/pexels-photo-23876843/free-photo-of-meat-for-cooking-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Fish Tikka",
      weight: "400 g",
      pieces: "4-6 Pieces",
      serves: "Serves3",
      price: "350 ₹",
      offerPrice: "299",
      discount: "8%"
    },
    {
      image: "https://images.pexels.com/photos/23876843/pexels-photo-23876843/free-photo-of-meat-for-cooking-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Paneer Tikka",
      weight: "500 g",
      pieces: "10-12 Pieces",
      serves: "Serves4",
      price: "230 ₹",
      offerPrice: "199",
      discount: "9%"
    },
    {
      image: "https://images.pexels.com/photos/23876843/pexels-photo-23876843/free-photo-of-meat-for-cooking-on-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Beef Steak",
      weight: "700 g",
      pieces: "2-4 Pieces",
      serves: "Serves3",
      price: "750 ₹",
      offerPrice: "699",
      discount: "7%"
    }
  ];

  return (
    <div className="bestsellers-section">
      <h4 className="bestsellers-title">Bestsellers</h4>
      <p className="bestsellers-description">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="bestsellers-container">
        {products.map((product, index) => (
          <div className="bestsellers-card" key={index}>
            <img src={product.image} alt={product.name} className="bestsellers-image" />
            <div className="bestsellers-card-body">
              <h5>{product.name}</h5>
              <p>
                <span className="price-original">{product.price}</span> {' '}
                <span className="price-offer">{product.offerPrice}</span>
                <span className="discount-label"> ({product.discount} off)</span>
                <br />
                <span className="item-details">{product.weight} | {product.pieces} | {product.serves}</span>
              </p>
              <div className="delivery-details">
                <span>Today in 90 mins</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;