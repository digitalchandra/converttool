export default function ImageCard({ image, onRemove }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow">

      <img
        src={image.preview}
        alt={image.name}
        className="w-full h-44 object-cover"
      />

      <div className="p-3">

        <h3 className="font-medium text-sm truncate">
          {image.name}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {(image.size / 1024 / 1024).toFixed(2)} MB
        </p>

        <button
          onClick={() => onRemove(image.id)}
          className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>

      </div>

    </div>
  );
}