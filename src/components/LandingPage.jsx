// src/components/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center"
      }}
    >
      <div style={{ background: "rgba(0,0,0,0.45)", padding: 30, borderRadius: 8 }}>
        <h1 style={{ margin: 0 }}>🌿 Plant Paradise</h1>
        <p style={{ marginTop: 12 }}>
          Welcome to Plant Paradise — your one-stop shop for beautiful houseplants that make your home come alive.
        </p>
        <Link to="/products">
          <button style={{ padding: "10px 18px", fontSize: 16, marginTop: 12 }}>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
