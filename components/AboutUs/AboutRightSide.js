// components/AboutUs/AboutRightSide.js
import React from "react";

const AboutRightSide = () => {
  return (
    <div className="about__sidebar">
      {/* Wide Search Bar */}
      <div className="widget widget-search mb-40">
        <form action="#" className="search-form">
          <input
            type="search"
            placeholder="Search ..."
            aria-label="Search"
            className="search-input"
            style={{
              width: "100%",
              padding: "12px 15px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </form>
      </div>

      {/* Why Choose Us Widget */}
      <div className="widget widget-facilities mb-40">
        <div
          className="facilities-box"
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "4px",
            background: "#f9f9f9",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#000000" }}>
            Why Choose Us?
          </h3>
          <p style={{ marginBottom: "10px" }}>
            We began with just 17 pupils, 4 teachers, and a caregiver, growing
            to 48 within the first session.
          </p>
          <p style={{ marginBottom: "10px" }}>
            Today, we stand as the heart of our community, known for high
            academic and moral standards, with awards of excellence to our name.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Despite limited infrastructure, our vision is to keep raising
            standards — by God’s grace. The journey of Flourish Foundation
            Academy has just begun!
          </p>
        </div>
      </div>

      {/* Core Values Widget */}
      <div className="widget widget-perks">
        <div
          className="perks-box"
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "4px",
            background: "#f9f9f9",
            textAlign: "left",
            marginTop: "40px",
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#000000" }}>
            Our Core Values
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-check-circle"
                style={{ color: "#007bff", marginRight: "10px" }}
              ></i>
              Academic Excellence
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-check-circle"
                style={{ color: "#007bff", marginRight: "10px" }}
              ></i>
              Spiritual Growth
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-check-circle"
                style={{ color: "#007bff", marginRight: "10px" }}
              ></i>
              Moral Integrity
            </li>
            <li
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className="fas fa-check-circle"
                style={{ color: "#007bff", marginRight: "10px" }}
              ></i>
              Community Commitment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutRightSide;
