interface ButtonName {
  name: string;
}

export default function Button({ name }: ButtonName) {
  return (
    <button className="bg-black hover:bg-gray-900 text-white rounded-md py-3  px-4 font-bold text-sm inline-flex justify-center items-center gap-2">
      {name}
    </button>
  );
}
