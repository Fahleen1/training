'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
            <li>
              <Link
                href="/employees"
                className={`group flex items-center gap-4 text-sm p-2 rounded w-full cursor-pointer hover:bg-gray-100 ${
                  pathname === '/employees' ? 'bg-gray-100' : ''
                }`}
              >
                <LuUsers
                  className={`text-base text-gray-600 group-hover:text-gray-800 ${
                    pathname === '/employees' ? ' text-gray-800' : ' '
                  }`}
                />
                <span
                  className={`text-color-black font-medium group-hover:text-gray-800 ${
                    pathname === '/employees'
                      ? 'text-gray-800 font-semibold'
                      : ''
                  }`}
                >
                  Employees
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className={`group flex items-center gap-4 text-sm p-2 rounded w-full cursor-pointer hover:bg-gray-100 ${
                  pathname === '/projects' ? 'bg-gray-100' : ''
                }`}
              >
                <LuBriefcase
                  className={`text-base text-gray-600 group-hover:text-gray-800  ${
                    pathname === '/projects' ? 'text-gray-800' : ''
                  }`}
                />
                <span
                  className={`text-color-black font-medium group-hover:text-gray-800 ${
                    pathname === '/projects'
                      ? 'text-gray-800 font-semibold'
                      : ''
                  }`}
                >
                  Projects
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/employees/add"
                className={`group flex items-center gap-4 text-sm p-2 rounded w-full cursor-pointer hover:bg-gray-100 ${
                  pathname === '/employees/add' ? 'bg-gray-100' : ''
                }`}
              >
                <MdAdd
                  className={`text-base text-gray-600  group-hover:text-gray-800 ${
                    pathname === '/employees/add' ? 'text-gray-800' : ''
                  }`}
                />
                <span
                  className={`text-color-black font-medium group-hover:text-gray-800 ${
                    pathname === '/employees/add'
                      ? 'text-gray-800 font-semibold'
                      : ''
                  }`}
                >
                  Add Employee
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/projects/add"
                className={`group flex items-center gap-4 text-sm p-2 rounded w-full cursor-pointer hover:bg-gray-100 ${
                  pathname === '/projects/add' ? 'bg-gray-100' : ''
                }`}
              >
                <MdAdd
                  className={`text-base text-gray-600  group-hover:text-gray-800  ${
                    pathname === '/projects/add' ? 'text-gray-800' : ''
                  }`}
                />
                <span
                  className={`text-color-black font-medium group-hover:text-gray-800 ${
                    pathname === '/projects/add'
                      ? 'text-gray-800 font-semibold'
                      : ''
                  }`}
                >
                  Add Project
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
