'use client';

import { useState } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';
import { NameProps } from '@/app/interface/interface';

const status: NameProps[] = [
  { id: 1, name: 'Not Started' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'Completed' },
];

export default function Add() {
  const [selectedStat, setSelectedStat] = useState<NameProps | null>(null);
  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Add New Project" />
      <div className="flex ">
        <form className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Project Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>

          <div className="flex flex-col">
            <CustomSelect
              label="Project"
              options={status}
              selected={selectedStat}
              onChange={setSelectedStat}
              placeholder="Select a Status"
            />
          </div>
          <Button name="Add Project" />
        </form>
      </div>
    </div>
  );
}
