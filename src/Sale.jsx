import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Nav } from "react-bootstrap";

export default function App() {
  const [member, setMember] = useState("normal");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [point, setPoint] = useState(0);

  // ฟังก์ชันคำนวณ %
  const getPercent = (type, price) => {
    if (!price || price <= 0) return 0;

    if (type === "normal") setPoint(price / 100);
    else if (type === "silver") setPoint((price / 100) * 1.5);
    else setPoint((price / 100) * 2);

    const rules = {
      normal: [2, 3, 4],
      silver: [3, 5, 6],
      gold: [5, 7, 10],
    };

    if (price <= 500) return rules[type][0];
    if (price <= 5000) return rules[type][1];
    return rules[type][2];
  };

  // คำนวณทุกครั้งที่ price หรือ member เปลี่ยน
  useEffect(() => {
    const p = parseFloat(price);
    const percent = getPercent(member, p);
    setDiscount(((p * percent) / 100).toFixed(2) || 0);
  }, [price, member]);

  return (
    <>
      <Navbar />
      <div className="container mt-5" style={{ maxWidth: 500 }}>
        <h3 className="mb-4">Discount Calculator</h3>

        {/* Radio */}
        <div className="mb-3">
          <label className="me-3">
            <input
              type="radio"
              value="normal"
              checked={member === "normal"}
              onChange={(e) => setMember(e.target.value)}
            />{" "}
            Normal
          </label>

          <label className="me-3">
            <input
              type="radio"
              value="silver"
              checked={member === "silver"}
              onChange={(e) => setMember(e.target.value)}
            />{" "}
            Silver
          </label>

          <label>
            <input
              type="radio"
              value="gold"
              checked={member === "gold"}
              onChange={(e) => setMember(e.target.value)}
            />{" "}
            Gold
          </label>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Discount */}
        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input
            type="text"
            className="form-control"
            value={discount}
            readOnly
          />
        </div>

        {/* Point */}
        <div className="mb-3">
          <label className="form-label">Point</label>
          <input type="text" className="form-control" value={point} readOnly />
        </div>
      </div>
    </>
  );
}
