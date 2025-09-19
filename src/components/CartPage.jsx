// src/components/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const cartItems = useSelector(state => state.cart.items || []);
  const dispatch = useDispatch();

  const totalPlants = cartItems.reduce((s, it) => s + (it.quantity || 0), 0);
  const totalCost = cartItems.reduce((s, it) => s + (it.price * (it.quantity || 0)), 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalPlants}</p>
      <p>Total Cost: ${totalCost}</p>

      {cartItems.length === 0 && <p>Your cart is empty. <Link to="/products">Shop now</Link></p>}

      {cartItems.map(item => (
        <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center", borderBottom: "1px solid #eee", padding: "12px 0" }}>
          <img src={item.img} alt={item.name} width={100} style={{ objectFit: "cover", borderRadius: 6 }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>{item.name}</h4>
            <p style={{ margin: "6px 0" }}>Unit Price: ${item.price}</p>
            <p style={{ margin: "6px 0" }}>Quantity: {item.quantity}</p>

            <div>
              <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
              <button
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                style={{ marginLeft: 8 }}
              >
                -
              </button>
              <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: 8 }}>Delete</button>
            </div>
          </div>
          <div>
            <p style={{ margin: 0 }}>Subtotal: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <button onClick={() => alert("Coming Soon!")}>Checkout</button>
        <Link to="/products"><button style={{ marginLeft: 12 }}>Continue Shopping</button></Link>
      </div>
    </div>
  );
}

export default CartPage;
