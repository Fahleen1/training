import { IoIosSwap } from 'react-icons/io';
import Select, { StylesConfig } from 'react-select';

export default function Form() {
  const currencies = [
    { value: 'eur', label: 'EUR' },
    { value: 'usd', label: 'USD' },
    { value: 'gbp', label: 'GBP' },
    { value: 'jpy', label: 'JPY' },
  ];

  const customStyles: StylesConfig = {
    control: (base, state) => ({
      ...base,
      borderRadius: '0.375rem',
      borderColor: state.isFocused ? '#6B7280' : '#e5e7eb',
      padding: '0.1rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'none',
      },
      '&:focus-visible': {
        outline: 'none',
        boxShadow: '0 0 0 2px gray',
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }),
    option: (base, state) => ({
      ...base,
      padding: '0.75rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      backgroundColor: state.isFocused ? '#F3F4F6' : 'white',
      color: '#1F2937',
      '&:active': {
        backgroundColor: '#6B7280',
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: '#6B7280',
      fontSize: '0.875rem',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
    }),
  };

  return (
    <div className="w-[480px] px-4 flex flex-col">
      <form className="border p-6 shadow-sm rounded-lg bg-white">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-[#09090b]">
            Amount
          </label>
          <input
            type="number"
            className="w-full border mt-2 rounded-md px-4 text-sm py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2
            placeholder:text-[#6b7280]"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex justify-between items-center gap-3">
          {/* From Dropdown */}
          <div className="w-[290px]">
            <label className="block text-[#09090b] text-sm font-medium mb-1">
              From
            </label>
            <Select
              options={currencies}
              className="react-select"
              classNamePrefix="react-select"
              placeholder="Select currency"
              isSearchable={false}
              styles={customStyles}
            />
          </div>

          {/* Swap Icon */}
          <div className="relative top-3 p-1.5 cursor-pointer hover:bg-[#f3f4f6] hover:rounded-full">
            <IoIosSwap className="text-3xl font-bold" />
          </div>

          {/* To Dropdown */}
          <div className="w-[290px]">
            <label className="block text-[#09090b] text-sm font-medium mb-1">
              To
            </label>
            <Select
              options={currencies}
              className="react-select"
              classNamePrefix="react-select"
              placeholder="Select currency"
              isSearchable={false}
              styles={customStyles}
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[#09090b] font-medium text-sm">
            Converted Amount
          </h3>
          <h2 className="text-2xl font-semibold mt-2">0.00</h2>
          <h3 className="text-sm mt-4 text-[#6b7280]">1 USD = 0.0000 EUR</h3>
        </div>
      </form>
    </div>
  );
}
