import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import girls from "./images/girls.png";
import group from "./images/group.png";

function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  const images = [girls, group];

  return (
    <div id="gallery" className="gallery">
      <h1>Gallery</h1>
      <div className="container mt-5">
        <Carousel activeIndex={selectedIndex} onSelect={handleSelect}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block mx-auto gallery-image"
                src={image}
                alt="gallery"
                style={{ height: "30rem" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
