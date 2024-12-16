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

type Project = {
  id: number;
  name: string;
};

const projects: Project[] = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
];

export default function EmployeeSelect() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className=" text-sm/6 font-medium text-gray-900">Project</Label>
      <div className="relative">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white px-3 py-2 text-left text-gray-900 border border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2">
          <span className="col-start-1 row-start-1 flex items-center gap-3">
            <span className="block text-sm">
              {selected ? selected.name : 'Select a Project'}
            </span>
          </span>

          <IoIosArrowDown className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </ListboxButton>

        <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none">
          {projects.map((project) => (
            <ListboxOption
              key={project.id}
              value={project}
              className="group relative cursor-default p-2 text-gray-900 data-[focus]:bg-gray-100 data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span className="w-5 flex-shrink-0 flex items-center justify-center">
                  {selected?.id === project.id && (
                    <IoCheckmarkOutline className="text-gray-900 font-bold" />
                  )}
                </span>
                <span className="block text-sm">{project.name}</span>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
