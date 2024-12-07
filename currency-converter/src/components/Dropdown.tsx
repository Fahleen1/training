import { IDropdownOption } from '../types';
import Select, { OnChangeValue, StylesConfig } from 'react-select';

interface IDropdown {
  label: string;
  options: IDropdownOption[];
  value: IDropdownOption | null;
  onChange: (selectedOption: IDropdownOption | null) => void;
}

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

export default function Dropdown({
  label,
  options,
  value,
  onChange,
}: IDropdown) {
  const handleChange = (selectedOption: OnChangeValue<unknown, boolean>) => {
    if (selectedOption) {
      onChange(selectedOption as IDropdownOption);
    }
  };

  return (
    <div className="w-[290px]">
      <label className="block custom-black text-sm font-medium mb-1">
        {label}
      </label>
      <Select
        options={options}
        className="react-select"
        classNamePrefix="react-select"
        placeholder="Select currency"
        isSearchable={false}
        styles={customStyles}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
