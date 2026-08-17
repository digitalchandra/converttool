import ImageCard from "./ImageCard";

export default function ImageList({ images, onRemove }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}