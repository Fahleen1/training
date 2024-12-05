import { useState } from 'react';
import { IoIosSwap } from 'react-icons/io';

import Dropdown, { IDropdownOptions } from './Dropdown';

const currencies = [
  { value: 'eur', label: 'EUR' },
  { value: 'usd', label: 'USD' },
  { value: 'gbp', label: 'GBP' },
  { value: 'jpy', label: 'JPY' },
];

export default function Form() {
  const [fromCurrency, setFromCurrency] = useState<IDropdownOptions>(
    currencies[0],
  );
  const [toCurrency, setToCurrency] = useState<IDropdownOptions>(currencies[0]);

  const [amount, setAmount] = useState<number>();

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

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
            value={amount}
            onChange={handleAmountInput}
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          {/* From Dropdown */}
          <Dropdown
            label="From"
            options={currencies}
            onChange={(o) => setFromCurrency(o)}
            value={fromCurrency}
          />

          {/* Swap Icon */}
          <div className="relative top-3 p-2 cursor-pointer hover:bg-[#f3f4f6] hover:rounded-full">
            <IoIosSwap className="text-3xl font-bold" />
          </div>

          {/* To Dropdown */}
          <Dropdown
            label="To"
            options={currencies}
            onChange={(o) => setToCurrency(o)}
            value={toCurrency}
          />
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
