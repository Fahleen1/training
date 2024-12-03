import { useState } from 'react';
import { IoIosSwap } from 'react-icons/io';

export default function Form() {
  const [fromDropdown, setFromDropdown] = useState(false);
  const [toDropdown, setToDropdown] = useState(false);

  const currencies = ['EUR', 'USD', 'GBP', 'JPY'];

  return (
    <div className="w-full form px-4 mt-8">
      <form className="border p-6 shadow-sm rounded-lg bg-white">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            className="w-full border mt-2 rounded-md px-4 text-sm py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex flex-row gap-4 items-center">
          {/* From Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">From</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setFromDropdown(!fromDropdown)}
                className="w-full border rounded-md mt-2 px-4 py-2 text-sm text-left bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Select currency
              </button>

              <div className="absolute inset-y-0 mt-2 right-2 flex items-center pointer-events-none">
                <svg
                  className="size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              {fromDropdown && (
                <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full shadow-lg">
                  {currencies.map((currency) => (
                    <li
                      key={currency}
                      onClick={() => {
                        setFromDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 hover:ring-offset-white"
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="p-2 mt-6  swap-icon">
            <IoIosSwap className="text-3xl font-bold" />
          </div>

          {/* To Dropdown */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">To</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setToDropdown(!toDropdown)}
                className="w-full border rounded-md mt-2 px-4 py-2 text-sm text-left bg-white focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-400"
              >
                Select currency
              </button>
              <div className="absolute inset-y-0 mt-2 right-2 flex items-center pointer-events-none">
                <svg
                  className="size-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              {toDropdown && (
                <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full shadow-lg">
                  {currencies.map((currency) => (
                    <li
                      key={currency}
                      onClick={() => {
                        setToDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="amount font-medium text-sm">Converted Amount</h3>
          <h2 className="text-2xl font-semibold mt-2">0.00</h2>
          <h3 className="text-sm mt-4" style={{ color: '#6B7280' }}>
            1 USD = 0.0000 EUR
          </h3>
        </div>
      </form>
    </div>
  );
}
