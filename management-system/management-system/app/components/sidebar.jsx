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
    <div className="flex bg-[#f9fafb] flex-col max-w-[255px] p-2 w-full gap-2 h-screen">
      <div className="flex gap-1 flex-col ">
        <h2 className="text-xl font-extrabold p-5">Management System</h2>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-auto">
        <div className="flex w-full flex-col">
          <div className="h-8 text-[#3f3f46b2] px-2 font-semibold text-xs flex items-center outline-none">
            Menu
          </div>
          <div>
            <ul className="flex color-black flex-col">
              <li className="flex items-center cursor-pointer gap-4 text-sm p-2 hover:bg-gray-100  rounded">
                {pathname === '/employees' ? (
                  <LuUsers className="text-base font-bold text-black" />
                ) : (
                  <LuUsers className="text-base text-gray-600" />
                )}

                <span>
                  <Link
                    href="/employees"
                    className={`${
                      pathname === '/employees'
                        ? 'font-semibold '
                        : 'text-gray-800 font-medium'
                    } hover:text-black`}
                  >
                    Employees
                  </Link>
                </span>
              </li>
              <li className="flex items-center cursor-pointer gap-4 text-sm p-2 hover:bg-gray-100 rounded">
                {pathname === '/projects' ? (
                  <LuBriefcase className="text-base font-bold text-black" />
                ) : (
                  <LuBriefcase className="text-base text-gray-600" />
                )}

                <span>
                  <Link
                    href="/projects"
                    className={`${
                      pathname === '/projects'
                        ? 'font-semibold '
                        : 'text-gray-800 font-medium'
                    } hover:text-black`}
                  >
                    Projects
                  </Link>
                </span>
              </li>
              <li className="flex items-center cursor-pointer gap-3 text-sm p-2 hover:bg-gray-100 rounded">
                {pathname === '/employees/add' ? (
                  <MdAdd className="font-bold text-lg text-black" />
                ) : (
                  <MdAdd className="text-lg text-gray-600" />
                )}
                <span>
                  <Link
                    href="/employees/add"
                    className={`${
                      pathname === '/employees/add'
                        ? 'font-semibold '
                        : 'text-gray-800 font-medium'
                    } hover:text-black`}
                  >
                    Add Employee
                  </Link>
                </span>
              </li>
              <li className="flex items-center cursor-pointer gap-3 text-sm p-2 hover:bg-gray-100 rounded">
                {pathname === '/projects/add' ? (
                  <MdAdd className="font-bold text-lg text-black" />
                ) : (
                  <MdAdd className="text-lg text-gray-600" />
                )}

                <span>
                  <Link
                    href="/projects/add"
                    className={`${
                      pathname === '/projects/add'
                        ? 'font-semibold '
                        : 'text-gray-800 font-medium'
                    } hover:text-black`}
                  >
                    Add Project
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
