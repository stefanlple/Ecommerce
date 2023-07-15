import React, { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

function ImageUpload() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const imagesArray = [];

    for (let i = 0; i < fileList.length; i++) {
      imagesArray.push(URL.createObjectURL(fileList[i]));
    }

    setImages([...images, ...imagesArray]);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const sourceIndex = e.dataTransfer.getData("imageIndex");
    const newImages = [...images];
    const [removedImage] = newImages.splice(sourceIndex, 1);
    newImages.splice(index, 0, removedImage);
    setImages(newImages);
  };

  return (
    <div className="border border-stone-400 p-2">
      <div className="mb-2 flex flex-col gap-2">
        <label
          htmlFor="files"
          className="m-auto border border-black p-3 font-semibold"
        >
          Select Images and Model <FaRegPlusSquare className="m-auto inline " />
        </label>
        <input
          id="files"
          type="file"
          className="invisible absolute border-2 p-2"
          onChange={handleImageChange}
          multiple
        />
        <p>Selected file count: {images.length}</p>
      </div>
      <div className="flex gap-2">
        {images.length ? (
          images.map((image, index) => (
            <div
              className="flex flex-col items-center gap-3 border border-black p-2"
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <p>Image {index + 1}</p>
              <img src={image} alt="uploaded" width="100" height="100" />
              <button
                className="mt-auto"
                onClick={() => handleRemoveImage(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <>
            <label
              htmlFor="files"
              className="flex h-[100px] w-[100px] items-center justify-center border border-black font-semibold"
            >
              <FaRegPlusSquare className="m-auto inline " />
            </label>
            <input
              id="files"
              type="file"
              className="invisible absolute border-2 p-2"
              onChange={handleImageChange}
              multiple
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
