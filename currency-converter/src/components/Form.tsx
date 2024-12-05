import { IoIosSwap } from 'react-icons/io';

import Dropdown from './Dropdown';

export default function Form() {
  return (
    <div className="w-[480px] px-4 flex flex-col">
      <form className="border p-6 flex flex-col gap-4 shadow-sm rounded-lg bg-white">
        <div>
          <label className="block text-sm font-medium mb-1 custom-black">
            Amount
          </label>
          <input
            type="number"
            className="w-full border mt-2 rounded-md px-4 text-sm py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
            placeholder:custom-gray"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          {/* From Dropdown */}
          <Dropdown label="From" />

          {/* Swap Icon */}
          <div className="relative top-3 p-2 cursor-pointer hover:bg-[#f3f4f6] hover:rounded-full">
            <IoIosSwap className="text-3xl font-bold" />
          </div>

          {/* To Dropdown */}
          <Dropdown label="To" />
        </div>

        <div>
          <h3 className="custom-black font-medium text-sm">Converted Amount</h3>
          <h2 className="text-2xl font-semibold mt-2">0.00</h2>
          <h3 className="text-sm mt-4 custom-gray">1 USD = 0.0000 EUR</h3>
        </div>
      </form>
    </div>
  );
}
