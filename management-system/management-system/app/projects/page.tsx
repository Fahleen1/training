'use client';

import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { Projects, projectColumns } from '../constants';
import { createClient } from '../utils/supabase/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import Button from '@/app/components/button';

export default function ProjectsData() {
  const supabase = createClient();
  const { data } = useQuery<Projects[]>({
    queryFn: async () => {
      const { data } = await supabase.from('projects').select('*');
      return data as Projects[];
    },
    queryKey: ['projects'],
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
          <Table data={data ?? []} columns={projectColumns} />
        </div>
      </div>
    </div>
  );
}
