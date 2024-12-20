'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { use } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';
import { Status } from '@/app/constants';
import { ParamsProps } from '@/app/interface/interface';
import { createClient } from '@/app/utils/supabase/client';

const supabase = createClient();

export default function Edit({ params }: ParamsProps) {
  const { id } = use(params);
  const [newName, setName] = useState<string>('');
  const [newSelectedStatus, setSelectedStatus] = useState<Status | null>(null);

  const { error } = useQuery({
    queryKey: ['projects', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('projects')
        .select('id, name, status')
        .eq('id', id)
        .single();
      setName(data?.name);
      setSelectedStatus(data?.status);
      return data;
    },
    enabled: !!id,
  });

  const { data: options = [] } = useQuery({
    queryKey: ['status'],
    queryFn: async () => {
      const { data } = await supabase.from('status').select('id, name');
      return data;
    },
  });

  const handleUpdate = async () => {
    try {
      const { data } = await supabase
        .from('projects')
        .update({ name: newName, status: newSelectedStatus?.id })
        .eq('id', id);
      return data;
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleStatusChange = (newStatus: Status) => {
    setSelectedStatus(newStatus);
  };

  const selectedStatusObj = options?.find(
    (option) => option.id === newSelectedStatus,
  );

  if (error) {
    return <div>Error loading projects</div>;
  }

  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Edit Project" />
      <div className="flex">
        <form onSubmit={handleUpdate} className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Project Name
            </label>
            <input
              type="text"
              id="name"
              value={newName}
              onChange={handleNameChange}
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>

          <div className="flex flex-col">
            <CustomSelect
              label="Project Status"
              options={options || []}
              selected={selectedStatusObj || null}
              onChange={handleStatusChange}
              placeholder="Select a Status"
            />
          </div>

          <Button name="Save" />
        </form>
      </div>
    </div>
  );
}
