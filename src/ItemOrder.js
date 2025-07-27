import React, { useState } from "react";

function ItemOrder() {
  const [orderData, setOrderData] = useState({});

  const items = [
    { name: "Chicken", unit: "Kg" },
    { name: "Mutton", unit: "Kg" },
    { name: "Eggs", unit: "Tray" },
    { name: "Onion", unit: "Kg" },
    { name: "Tomato", unit: "Kg" },
    { name: "Carrot", unit: "Kg" },
    { name: "Appam Batter", unit: "Ltr" },
    { name: "Stew Base", unit: "Ltr" }
  ];

  const handleChange = (item, value) => {
    const quantity = parseFloat(value);
    setOrderData((prev) => ({
      ...prev,
      [item]: isNaN(quantity) ? "" : quantity
    }));
  };

  const handleSubmit = () => {
    console.log("Order Submitted:", orderData);
    alert("Order submitted! (Check console for now)");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>🧾 Stewmaker Daily Order</h2>
      <p>{new Date().toDateString()}</p>
      <table style={{ width: "100%", marginTop: 10, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Item</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Qty</th>
            <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Unit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td style={{ padding: "8px 0" }}>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={orderData[item.name] || ""}
                  onChange={(e) => handleChange(item.name, e.target.value)}
                  placeholder="Enter qty"
                  style={{ width: "100px", padding: "4px" }}
                />
              </td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: 4
        }}
      >
        Submit Order
      </button>
    </div>
  );
}

export default ItemOrder;
