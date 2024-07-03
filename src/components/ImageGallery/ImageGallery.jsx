import React from "react";
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, setSelectedImage }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul className={css.photo}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css.photoItem}
          onClick={() => setSelectedImage(image)}
        >
          <ImageCard image={image} src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
