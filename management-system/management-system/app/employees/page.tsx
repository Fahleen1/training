'use client';

import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { Employee, employeeColumns } from '../constants';
import { createClient } from '../utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import Button from '@/app/components/button';

export default function Employees() {
  const supabase = createClient();
  const { data } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: async () => {
      const { data } = await supabase.from('employees').select(`*, 
        projects(name)`);

      return data?.map((employee) => ({
        ...employee,
        projects: employee.projects?.name ?? 'No Project',
      })) as Employee[];
    },
  });

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
          <Table data={data ?? []} columns={employeeColumns} />
        </div>
      </div>
    </div>
  );
}
