'use client';

import EmployeeSelect from '../components/employee-select';
import React from 'react';

import Button from '@/app/components/button';
import MainHeading from '@/app/components/main-heading';

export default function Add() {
  return (
    <div className="flex flex-col p-6 gap-5">
      <MainHeading name="Add New Employee" />
      <div className="flex ">
        <form className="w-full space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm/6 font-medium text-gray-900"
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
              className="text-sm/6 font-medium text-gray-900"
            >
              Position
            </label>
            <input
              type="text"
              className="w-full border border-gray-200 flex h-10 rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex flex-col">
            <EmployeeSelect />
          </div>
          <Button name="Add Employee" />
        </form>
      </div>
    </div>
  );
}
