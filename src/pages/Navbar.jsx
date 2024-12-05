import React from "react";
import "./Navbar.css";

const Navbar = ({ name, count, images }) => {
  const hasError = images.some((img) => img.error);

  return (
    <nav className="navbar">
      <div className="navbar-images">
        {images.map((img, index) => {
          if (img.ready) {
            return (
              <div key={index} className="image-container">
                <img src={img.url} alt={`Image ${index + 1}`} className="circle-image" />
              </div>
            );
          } else if (img.error) {
            return (
              <div key={index} className="image-container error">
                <span>⚠️</span>
              </div>
            );
          }
          return null;
        })}
        {Array.from({ length: 4 - images.length }).map((_, index) => (
          <div key={images.length + index} className="image-container placeholder"></div>
        ))}
      </div>
      <div className="navbar-center">
        <h1 className="navbar-title">{name}</h1>
        <h3 className="navbar-subtitle">{count} offline centers</h3>
      </div>
      <div className="navbar-warning">
        {hasError && (
          <div className="warning-icon">
            <span>⚠️</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
