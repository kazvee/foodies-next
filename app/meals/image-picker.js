'use client';

import { useRef } from 'react';

import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();

  const handlePickImageClick = () => {
    imageInput.current.click();
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImageClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
