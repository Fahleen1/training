import { IDropdownOption } from '../types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoIosSwap } from 'react-icons/io';

import Dropdown from './Dropdown';

const currencies: IDropdownOption[] = [
  { value: 'eur', label: 'EUR' },
  { value: 'usd', label: 'USD' },
  { value: 'gbp', label: 'GBP' },
  { value: 'jpy', label: 'JPY' },
];

const API_KEY = '8f5815d1afcbb47e082e675f';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

export default function Form() {
  const [fromCurrency, setFromCurrency] = useState<IDropdownOption | null>(
    null,
  );
  const [toCurrency, setToCurrency] = useState<IDropdownOption | null>(null);
  const [amount, setAmount] = useState<number>(0);

  const handleAmountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setAmount(value === '' ? 0 : Number(value));
  };

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        //Verifying if rates are getting or not
        console.log(data.conversion_rates);
      } catch (error) {
        console.error('Error fetching exchange rates', error);
      }
    };

    fetchExchangeRates();
  }, []);

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
            value={amount === 0 ? '' : amount}
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
