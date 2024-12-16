'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuBriefcase } from 'react-icons/lu';
import { LuUsers } from 'react-icons/lu';
import { MdAdd } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex bg-[#f9fafb] flex-col max-w-[255px] p-2 w-full gap-4 h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h2 className="text-xl text-color-black font-extrabold px-5 py-3">
            Management System
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-auto">
          <div className="h-6 text-[#3f3f46b2] px-2 font-semibold text-xs flex items-center outline-none">
            Menu
          </div>
          <ul className="flex flex-col">
            <li
              className={`flex items-center cursor-pointer gap-4 text-sm p-2 rounded ${
                pathname === '/employees' ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              <LuUsers
                className={`text-base ${
                  pathname === '/employees'
                    ? 'font-bold text-color-black'
                    : 'text-gray-600'
                }`}
              />
              <span>
                <Link
                  href="/employees"
                  className={`${
                    pathname === '/employees'
                      ? 'text-gray-800 font-semibold'
                      : 'text-color-black font-medium'
                  } hover:text-gray-950`}
                >
                  Employees
                </Link>
              </span>
            </li>
            <li
              className={`flex items-center cursor-pointer gap-4 text-sm p-2 rounded ${
                pathname === '/projects' ? 'bg-gray-100' : 'hover:bg-gray-100'
              }`}
            >
              <LuBriefcase
                className={`text-base ${
                  pathname === '/projects'
                    ? 'font-bold text-color-black'
                    : 'text-gray-600'
                }`}
              />
              <span>
                <Link
                  href="/projects"
                  className={`${
                    pathname === '/projects'
                      ? 'text-gray-800 font-semibold'
                      : 'text-color-black font-medium'
                  } hover:text-gray-950`}
                >
                  Projects
                </Link>
              </span>
            </li>
            <li
              className={`flex items-center cursor-pointer gap-3 text-sm p-2 rounded ${
                pathname === '/employees/add'
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-100'
              }`}
            >
              <MdAdd
                className={`text-lg ${
                  pathname === '/employees/add'
                    ? 'font-bold text-color-black'
                    : 'text-gray-600'
                }`}
              />
              <span>
                <Link
                  href="/employees/add"
                  className={`${
                    pathname === '/employees/add'
                      ? 'text-gray-800 font-semibold'
                      : 'text-color-black font-medium'
                  } hover:text-gray-950`}
                >
                  Add Employee
                </Link>
              </span>
            </li>
            <li
              className={`flex items-center cursor-pointer gap-3 text-sm p-2 rounded ${
                pathname === '/projects/add'
                  ? 'bg-gray-100'
                  : 'hover:bg-gray-100'
              }`}
            >
              <MdAdd
                className={`text-lg ${
                  pathname === '/projects/add'
                    ? 'font-bold text-color-black'
                    : 'text-gray-600'
                }`}
              />
              <span>
                <Link
                  href="/projects/add"
                  className={`${
                    pathname === '/projects/add'
                      ? 'text-gray-800 font-semibold'
                      : 'text-color-black font-medium'
                  } hover:text-gray-950`}
                >
                  Add Project
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
