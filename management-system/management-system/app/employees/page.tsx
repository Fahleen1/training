import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { employeeColumns } from '../constants';
import { employees } from '../data';
import Link from 'next/link';

import Button from '@/app/components/button';

export default function Employees() {
  return (
    <div>
      <div className="flex flex-col gap-5 p-4 ">
        <MainHeading name="Employees" />
        <div className="flex items-center">
          <Link href="/employees/add">
            <Button name="Add New Employee" />
          </Link>
        </div>
        <div className="flex items-center">
          <Table data={employees} columns={employeeColumns} />
        </div>
      </div>
    </div>
  );
}
