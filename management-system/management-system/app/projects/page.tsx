'use client';

import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { Employee, Projects, projectColumns } from '../constants';
import { createClient } from '../utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/app/components/button';

const supabase = createClient();

export default function ProjectsData() {
  const router = useRouter();

  const { data: projects } = useQuery<Projects[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await supabase
        .from('projects')
        .select(`*, status(name)`);
      return data?.map((project) => ({
        ...project,
        status: project.status?.name ?? '',
      })) as Projects[];
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
    const employeeCount = (employees || []).filter(
      (employee) =>
        Array.isArray(employee.projects) &&
        employee.projects.includes(project.id),
    ).length;
    return {
      ...project,
      no_of_employees: employeeCount,
    };
  });

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
  };

  const onEdit = (id: string) => {
    router.push(`/projects/${id}/edit`);
  };

  const onDelete = (id: string) => {
    handleDelete(id);
  };

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
          <Table
            data={combinedProj}
            columns={projectColumns}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
