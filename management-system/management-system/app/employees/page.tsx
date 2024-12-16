import MainHeading from '../components/main-heading';
import React from 'react';

import Button from '@/app/components/button';

import EmployeeTable from './components/employee-table';

export default function Employees() {
  return (
    <div>
      <div className="flex flex-col gap-5 p-4 ">
        <MainHeading name="Employees" />
        <div className="flex items-center">
          <Button name="Add New Employee" />
        </div>
        <div className="flex items-center">
          <EmployeeTable />
        </div>
      </div>
    </div>
  );
}
