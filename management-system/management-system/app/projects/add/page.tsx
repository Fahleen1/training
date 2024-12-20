'use client';

import { useQuery } from '@tanstack/react-query';
import { FormEvent, useState } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';
import { Status } from '@/app/constants';
import { createClient } from '@/app/utils/supabase/client';

const supabase = createClient();

export default function Add() {
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);
  const [name, setName] = useState<string>('');

  const { data: options = [] } = useQuery<Status[]>({
    queryKey: ['status'],
    queryFn: async () => {
      const { data, error } = await supabase.from('status').select('id, name');

      if (error) {
        console.error('Error fetching status options:', error);
        throw new Error(error.message);
      }

      return data ?? [];
    },
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !selectedStatus) {
      return;
    }

    const { data } = await supabase
      .from('projects')
      .insert([{ name: name, status: selectedStatus?.id }])
      .select();
    return data;
  };

  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Add New Project" />
      <div className="flex ">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Project Name
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>

          <div className="flex flex-col">
            <CustomSelect
              label="Project"
              options={options}
              selected={selectedStatus}
              onChange={setSelectedStatus}
              placeholder="Select a Status"
            />
          </div>
          <Button name="Add Project" />
        </form>
      </div>
    </div>
  );
}
