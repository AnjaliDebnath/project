import React, { useState, useEffect } from "react";
import "./ImageComponent.css";

const ImageComponent = ({ image, onUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (image.error && retryCount < 3) {
      setLoading(true);
      const timer = setTimeout(() => {
        const success = Math.random() > 0.5; // to find  success/failure
        setLoading(false);
        if (success) {
          onUpdate({ ...image, error: false, ready: true });
        } else {
          setRetryCount(retryCount + 1);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [image.error, retryCount, image, onUpdate]);

  const renderContent = () => {
    if (loading) {
       return <div> </div>
    }

    if (image.error) {
      return <div ></div>;
    }

    if (image.ready) {
      return <img src={image.url} alt="Loaded"  />;
    }

    return <div className="placeholder">Placeholder</div>;
  };

  return <div className="image-container">{}</div>;
};

export default ImageComponent;
