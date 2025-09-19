// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector((state) => state.cart.items || []);
  const totalQuantity = items.reduce((sum, itm) => sum + (itm.quantity || 0), 0);

  return (
    <header style={{ padding: "12px 20px", background: "#2f855a", color: "white" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: "700" }}>🌿 Plant Paradise</div>
        <div>
          <Link to="/" style={{ color: "white", marginRight: 12 }}>Home</Link>
          <Link to="/products" style={{ color: "white", marginRight: 12 }}>Products</Link>
          <Link to="/cart" style={{ color: "white" }}>🛒 Cart ({totalQuantity})</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
