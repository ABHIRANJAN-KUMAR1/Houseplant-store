// src/components/ProductList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

// sample data (6 unique plants, at least 3 categories)
const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor", img: "https://picsum.photos/seed/s1/400/300" },
  { id: 2, name: "Peace Lily", price: 20, category: "Indoor", img: "https://picsum.photos/seed/s2/400/300" },
  { id: 3, name: "Aloe Vera", price: 10, category: "Medicinal", img: "https://picsum.photos/seed/s3/400/300" },
  { id: 4, name: "Spider Plant", price: 12, category: "Indoor", img: "https://picsum.photos/seed/s4/400/300" },
  { id: 5, name: "Bamboo Palm", price: 25, category: "Tropical", img: "https://picsum.photos/seed/s5/400/300" },
  { id: 6, name: "Cactus", price: 8, category: "Desert", img: "https://picsum.photos/seed/s6/400/300" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  // make unique categories
  const categories = Array.from(new Set(plants.map(p => p.category)));

  return (
    <div style={{ padding: 20 }}>
      <h2>Our Plants</h2>
      {categories.map(cat => (
        <section key={cat} style={{ marginTop: 20 }}>
          <h3>{cat}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {plants.filter(p => p.category === cat).map(plant => {
              const inCart = cartItems.find(ci => ci.id === plant.id);
              return (
                <div key={plant.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
                  <img src={plant.img} alt={plant.name} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }} />
                  <h4 style={{ margin: "10px 0 6px" }}>{plant.name}</h4>
                  <p style={{ margin: "0 0 6px" }}>Price: ${plant.price}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={!!inCart}
                    style={{ padding: "8px 10px" }}
                  >
                    {inCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
