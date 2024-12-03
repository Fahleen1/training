import { IoIosSwap } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function Form() {
  return (
    <div className="w-full max-w-md px-4 mt-8">
      <form className="border p-6 shadow rounded-lg bg-white">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            className="w-full border rounded px-4 text-sm py-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex flex-row gap-4 items-center">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">From</label>
            <div className="select-box relative">
              <select className="w-full appearance-none border rounded-md px-4 text-sm py-2 focus:ring-blue-500">
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center">
                <RiArrowDropDownLine className="size-6" />
              </div>
            </div>
          </div>

          <div className="p-2 mt-4 swap-icon">
            <IoIosSwap className="text-xl" />
          </div>

          <div className="flex-1">
            <label className="block font-medium text-sm mb-1">To</label>
            <div className="select-box relative">
              <select className="w-full appearance-none border rounded-md px-4 text-sm py-2 focus:ring-blue-500">
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center">
                <RiArrowDropDownLine className="size-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="amount font-medium text-sm">Converted Amount</h3>
          <h2 className="text-2xl font-semibold">0.00</h2>
          <h3 className="text-sm mt-2" style={{ color: '#6B7280' }}>
            1 USD = 0.0000 EUR
          </h3>
        </div>
      </form>
    </div>
  );
}
