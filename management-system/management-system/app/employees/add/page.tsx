'use client';

import { useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';
import { NameProps } from '@/app/interface/interface';
import { createClient } from '@/app/utils/supabase/client';

const supabase = createClient();

export default function Add() {
  const [selectedProj, setSelectedProj] = useState<NameProps | null>(null);
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');

  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await supabase.from('projects').select('id, name');
      return data ?? [];
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await supabase
      .from('employees')
      .insert([{ name: name, position: position, projects: selectedProj?.id }])
      .select();
    return data;
  };

  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Add New Employee" />
      <div className="flex ">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex flex-col">
            <CustomSelect
              label="Project"
              options={data || []}
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
