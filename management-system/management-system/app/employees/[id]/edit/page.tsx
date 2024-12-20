'use client';

import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { use } from 'react';

import Button from '@/app/components/button';
import CustomSelect from '@/app/components/custom-select';
import MainHeading from '@/app/components/main-heading';
import { NameProps, ParamsProps } from '@/app/interface/interface';
import { createClient } from '@/app/utils/supabase/client';

const supabase = createClient();

export default function Edit({ params }: ParamsProps) {
  const { id } = use(params);
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [selectedProj, setSelectedProj] = useState<NameProps | null>(null);

  const { error } = useQuery({
    queryKey: ['employees', id],
    queryFn: async () => {
      const { data } = await supabase
        .from('employees')
        .select('id, name, position, projects')
        .eq('id', id)
        .single();
      setName(data?.name);
      setPosition(data?.position);
      setSelectedProj(data?.projects);
      return data;
    },
    enabled: !!id,
  });

  const { data: options = [] } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await supabase.from('projects').select('id, name');
      return data;
    },
  });

  const handleUpdate = async () => {
    try {
      const { data } = await supabase
        .from('employees')
        .update({
          name: name,
          position: position,
          projects: selectedProj?.id,
        })
        .eq('id', id);
      return data;
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const handleProjectChange = (newProject: NameProps) => {
    setSelectedProj(newProject);
  };

  const selectedProjectObj = options?.find(
    (option) => option.id === selectedProj?.id,
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Edit Employee" />
      <div className="flex">
        <form onSubmit={handleUpdate} className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-color-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
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
              id="position"
              value={position}
              onChange={handlePositionChange}
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex flex-col">
            <CustomSelect
              label="Project"
              options={options || []}
              selected={selectedProjectObj || null}
              onChange={handleProjectChange}
              placeholder="Select a Project"
            />
          </div>
          <Button name="Save" />
        </form>
      </div>
    </div>
  );
}
