'use client';

import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCheckmarkOutline } from 'react-icons/io5';

type Status = {
  id: number;
  name: string;
};

const status: Status[] = [
  { id: 1, name: 'Not Started' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'Completed' },
];

export default function ProjectSelect() {
  const [selected, setSelected] = useState<Status | null>(null);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className=" text-sm/6 font-medium text-color-black">Status</Label>
      <div className="relative">
        <ListboxButton className="grid w-full cursor-pointer grid-cols-1 rounded-md bg-white px-3 py-2 text-left text-gray-900 border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2">
          <span className="col-start-1 row-start-1 flex items-center gap-3">
            <span className="block text-color-black font-medium text-sm">
              {selected ? selected.name : 'Select a Status'}
            </span>
          </span>

          <IoIosArrowDown className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
          {status.map((s) => (
            <ListboxOption
              key={s.id}
              value={s}
              className="group relative cursor-default p-2 text-color-black font-medium data-[focus]:bg-gray-100 data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span className="w-5 flex-shrink-0 flex items-center justify-center">
                  {selected?.id === s.id && (
                    <IoCheckmarkOutline className="text-color-black font-bold" />
                  )}
                </span>
                <span className="block text-sm">{s.name}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
