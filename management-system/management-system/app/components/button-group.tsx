type ButtonGroupProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function ButtonGroup({ onEdit, onDelete }: ButtonGroupProps) {
  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={onEdit}
        className="bg-white font-semibold px-3 py-2 hover:bg-gray-100 rounded-md border border-gray-200"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="bg-red-500 font-semibold py-2 px-3 hover:bg-[#ef5c5c] rounded-md text-white"
      >
        Delete
      </button>
    </div>
  );
}
