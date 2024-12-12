import React from 'react';
import { LuUsers } from 'react-icons/lu';

export default function Navbar() {
  return (
    <div className="flex bg-[#f9fafb] flex-col w-60 gap-2 h-screen">
      <div className="flex gap-1 flex-col p-4">
        <h2 className="text-xl font-bold p-2">
          Management <br /> System
        </h2>
      </div>
      <div className="fflex min-h-0 flex-1 flex-col gap-2 overflow-auto">
        <div className="flex w-full flex-col p-2">
          <div className="h-8 text-[#3f3f46b2] text-xs flex items-center px-2 font-medium outline-none">
            Menu
          </div>
          <div>
            <ul className="flex flex-col gap-1">
              <li className="flex items-center font-semibold text-sm p-2 hover:bg-gray-200 rounded">
                <LuUsers />
                <span>Employees</span>
              </li>
              <li className="flex items-center gap-1 font-semibold text-sm p-2 hover:bg-gray-200 rounded">
                <LuUsers />
                <span>Employees</span>
              </li>
              <li>Projects</li>
              <li>Add Employee</li>
              <li>Add Project</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
