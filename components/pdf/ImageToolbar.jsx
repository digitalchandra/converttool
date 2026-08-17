export default function ImageToolbar({
  count,
  onAdd,
  onClear,
  onConvert,
}) {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-xl shadow">

      <div className="font-medium">
        {count} Images Selected
      </div>

      <div className="flex gap-3">

        <button
          onClick={onAdd}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg"
        >
          Add Images
        </button>

        <button
          onClick={onClear}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Clear All
        </button>

        <button
          onClick={onConvert}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Convert to PDF
        </button>

      </div>

    </div>
  );
}