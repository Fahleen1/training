'use client';

import React from 'react';

import Buttongroup from '@/app/components/button-group';
import { employees } from '@/app/data';

export default function EmployeeTable() {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse table-fixed">
        <thead className="text-color-gray border-b">
          <tr className="hover:bg-gray-50">
            <th className="w-1/6 px-4 py-3 text-left">Name</th>
            <th className="w-1/6 px-4 py-3 text-left">Position</th>
            <th className="w-1/6 px-4 py-3 text-left">Projects</th>
            <th className="w-3/12 px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody className="border-0">
          {employees.map((project, index) => (
            <tr
              key={project.id}
              className={`hover:bg-gray-50 ${
                index === employees.length - 1 ? '' : 'border-b'
              }`}
            >
              <th className="w-1/6 p-4 font-medium text-color-black whitespace-nowrap">
                {project.name}
              </th>
              <td className="w-1/6 p-4 font-medium text-color-black">
                {project.position}
              </td>
              <td className="w-1/6 p-4 font-medium text-color-black">
                {project.projects}
              </td>
              <td className="w-3/12 p-4 font-medium text-color-black">
                <Buttongroup />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
