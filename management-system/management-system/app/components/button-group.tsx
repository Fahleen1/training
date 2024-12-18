export default function ButtonGroup() {
  return (
    <div className="flex flex-row gap-2">
      <button className="bg-white font-semibold px-3 py-2 hover:bg-gray-100 rounded-md border border-gray-200">
        Edit
      </button>
      <button className="bg-red-500 font-semibold py-2 px-3 hover:bg-[#ef5c5c] rounded-md text-white">
        Delete
      </button>
    </div>
  );
}
