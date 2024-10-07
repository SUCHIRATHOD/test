import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Searches.css'; // Import the CSS file

const Searches = () => {
  const searches = {
    Chicken: [
      "Chicken Breast (Boneless)",
      "Chicken (Skinless) - Curry Cut (Large)",
      "Chicken Mince/Keema",
      "Chicken Leg Curry Cut (Large - 4 pieces)",
      "Chicken Lollipop - 10 Pieces",
      "Tender Spring Chicken Curry Cut",
      "Chicken - Whole with Skin",
      "Chicken Curry Cut (Small - 13 to 16 Pieces)"
    ],
    Eggs: [
      "Classic Eggs - Pack Of 6"
    ],
    Mutton: [
      "Goat Mince/Keema",
      "Rich Goat Curry Cut (Small - 16 to 20 pieces)",
      "Lean Goat Curry Cut (Small - 16 to 20 pieces)",
      "Lean Lamb Curry Cut (Small - 16 to 20 pieces)",
      "Rich Lamb Curry Cut (Small - 16 to 20 pieces)",
      "Lamb Ribs and Chops",
      "Goat Ribs and Chops"
    ],
    FishSeafood: [
      "Basa Fillet (Platinum Grade)",
      "Premium Grade Mackerel (Cleaned)",
      "Freshwater Rohu Large - Bengali Cut (w/o Head)",
      "Freshwater Rohu - Bengali Cut (Without Head)",
      "Medium Prawns - Without Tail",
      "Seer (Surmai) Steaks",
      "Freshwater Rohu Small - Bengali Cut (without Head)"
    ],
    ReadyToCook: [
      "Caribbean Jerk Chicken (Boneless)",
      "Habanero Chicken Wings (Hot) - 10 Pieces",
      "Creamy Afghani Chicken",
      "Peri Peri Chicken (Spicy)",
      "Chicken Cutlet (Bengali Style)"
    ],
    ExoticMeats: [
      "Atlantic Salmon Steaks",
      "Blue Crab",
      "Sea Bass/ Bhetki Fillet"
    ],
    Spreads: [
      "Chunky Butter Chicken Spread (Single Serve)",
      "Chunky Continental Chicken Spread",
      "Chunky Shawarma Chicken Spread (Single Serve)"
    ],
    Kebabs: [
      "Afghani Murgh Seekh Kebab",
      "Purani Dilli ki Mutton Seekh Kebab"
    ],
    MeatMasala: [
      "Classic Meat Masala",
      "Dakshin Pepper Fry Masala",
      "Chatpata Fish Fry Masala",
      "Classic Chicken Masala",
      "Asli Garam Masala",
      "Original Tandoori Chicken Masala",
      "Shandaar Butter Chicken Masala",
      "Khansama Biryani Masala"
    ]
  };

  return (
    <Container className="popular-searches">
      <h5 className="title">POPULAR SEARCHES</h5>
      {Object.entries(searches).map(([category, items]) => (
        <div key={category} className="search-category">
          <h4>{category}</h4>
          <p>{items.join(" | ")}</p>
        </div>
      ))}
    </Container>
  );
}

export default Searches;
