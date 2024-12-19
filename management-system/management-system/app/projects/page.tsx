'use client';

import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { Employee, Projects, projectColumns } from '../constants';
import { createClient } from '../utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import Button from '@/app/components/button';

export default function ProjectsData() {
  const supabase = createClient();
  const { data: projects } = useQuery<Projects[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await supabase.from('projects').select('*');
      return data as Projects[];
    },
  });

  const { data: employees } = useQuery<Employee[]>({
    queryKey: ['employees'],
    queryFn: async () => {
      const { data } = await supabase
        .from('employees')
        .select('id, name, position, projects');
      return data as Employee[];
    },
  });

  const combinedProj = (projects || []).map((project) => {
    const employeeCount = (employees || []).filter((employee) =>
      employee.projects.includes(project.id),
    ).length;

    return {
      ...project,
      no_of_employees: employeeCount,
    };
  });

  return (
    <div>
      <div className="flex flex-col gap-4 p-4 ">
        <MainHeading name="Projects" />
        <div className="flex items-center">
          <Link href="/projects/add">
            <Button name="Add New Project" />
          </Link>
        </div>
        <div className="flex items-center">
          <Table data={combinedProj} columns={projectColumns} />
        </div>
      </div>
    </div>
  );
}
