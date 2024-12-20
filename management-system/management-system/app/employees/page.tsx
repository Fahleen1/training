'use client';

import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { Employee, employeeColumns } from '../constants';
import { createClient } from '../utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button';

export default function Employees() {
  const router = useRouter();
  const supabase = createClient();
  const { data } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: async () => {
      const { data } = await supabase.from('employees').select(`
       *,
        projects (name)
      `);

      return data?.map((employee) => ({
        ...employee,
        projects: employee.projects?.name ?? 'No Project',
      })) as Employee[];
    },
  });

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('employees').delete().eq('id', id);
    if (error) throw error;
  };

  const onEdit = (id: string) => {
    router.push(`/employees/${id}/edit`);
  };

  const onDelete = (id: string) => {
    console.log(id);
    handleDelete(id);
  };

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
          <Table
            data={data ?? []}
            columns={employeeColumns}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
