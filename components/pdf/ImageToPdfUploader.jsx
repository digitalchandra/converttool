"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";

import ImageList from "./ImageList";
import ImageToolbar from "./ImageToolbar";

export default function ImageToPdfUploader() {
  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    noClick: true,
    onDrop,
  });

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const clearImages = () => {
    setImages([]);
  };

  const handleConvert = () => {
    console.log(images);
    // API call later
  };

  return (
    <div className="space-y-6">

      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-xl p-10 text-center bg-white cursor-pointer hover:bg-gray-50"
      >
        <input {...getInputProps()} />

        <h2 className="text-xl font-semibold">
          Drag & Drop Images Here
        </h2>

        <p className="text-gray-500 mt-2">
          JPG, PNG, WEBP, GIF
        </p>

        <button
          type="button"
          onClick={open}
          className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Select Images
        </button>
      </div>

      <ImageToolbar
        count={images.length}
        onAdd={open}
        onClear={clearImages}
        onConvert={handleConvert}
      />

      <ImageList
        images={images}
        onRemove={removeImage}
      />

    </div>
  );
}