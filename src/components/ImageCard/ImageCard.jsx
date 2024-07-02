import React from 'react'
import css from "./ImageCard.module.css";

const ImageCard = ({src, alt, onClick, aythor, likes, description}) => {
  return (
      <div>
          <img className={css.images} src={src} alt={alt}/>
    </div>
  )
}

export default ImageCard