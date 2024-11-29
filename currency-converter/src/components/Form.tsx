import { IoIosSwap } from "react-icons/io";
import { useState } from "react";

export default function Form() {
  const [fromCurrency, setFromCurrency] = useState<string>("eur");
  const [toCurrency, setToCurrency] = useState<string>("usd");

  const [amount, setAmount] = useState(0);

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

  const handleToCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value);
  };

  const handleFromCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value);
  };

  return (
    <div className="w-full max-w-md px-4 mt-4">
      <form className="border p-6 shadow rounded-lg bg-white">
        <div className="mb-4">
          <label className="block text-base text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            className="w-full border rounded px-3 py-2 focus:ring-blue-500"
            placeholder="Enter amount"
            onChange={handleAmountInput}
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-base text-gray-700 mb-1">From</label>
            <select
              className="w-full border rounded-md px-3 py-2 focus:ring-blue-500"
              value={fromCurrency}
              onChange={handleFromCurrency}
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="gbp">GBP</option>
              <option value="jpy">JPY</option>
            </select>
          </div>

          <div className="mt-7 p-3 swap-icon">
            <IoIosSwap />
          </div>

          <div className="flex-1">
            <label className="block text-base text-gray-700 mb-1">To</label>
            <select
              className="w-full border rounded-md px-3 py-2 focus:ring-blue-500"
              value={toCurrency}
              onChange={handleToCurrency}
            >
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="gbp">GBP</option>
              <option value="jpy">JPY</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-gray-700 text-sm">Converted Amount</h3>
          <h2 className="text-2xl font-semibold">{amount}</h2>
          <h3 className="text-gray-400 text-sm mt-2">1 USD = 0.0000 EUR</h3>
        </div>
      </form>
    </div>
  );
}
