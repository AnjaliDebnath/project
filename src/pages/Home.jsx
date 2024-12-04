import React, { useState } from "react";
import ImageComponent from "../components/ImageComponent";
import "./Home.css";

const HomePage = () => {
  const [images, setImages] = useState([
    { url: "https://via.placeholder.com/38", ready: true, error: false },
    { url: "https://via.placeholder.com/38", ready: false, error: true },
    { url: "https://via.placeholder.com/38", ready: true, error: false },
  ]);

  const updateImageState = (index, updatedImage) => {
    setImages((prev) =>
      prev.map((img, i) => (i === index ? updatedImage : img))
    );
  };

  return (
    <div className="home-page">
      <h1>Image Grid</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            image={image}
            onUpdate={(updatedImage) => updateImageState(index, updatedImage)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
