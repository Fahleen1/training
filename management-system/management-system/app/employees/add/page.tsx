'use client';

import { useState } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';

type Project = {
  id: number;
  name: string;
};

const projects: Project[] = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
];

export default function Add() {
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);
  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Add New Employee" />
      <div className="flex ">
        <form className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="position"
              className="text-sm/6 font-medium text-color-black"
            >
              Position
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex flex-col">
            <CustomSelect
              label="Project"
              options={projects}
              selected={selectedProj}
              onChange={setSelectedProj}
              placeholder="Select a Project"
            />
          </div>
          <Button name="Add Employee" />
        </form>
      </div>
    </div>
  );
}
