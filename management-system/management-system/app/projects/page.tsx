import MainHeading from '../components/main-heading';
import Table from '../components/table';
import { projectColumns } from '../constants';
import { projects } from '../data';
import Link from 'next/link';

import Button from '@/app/components/button';

export default function Projects() {
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
          <Table data={projects} columns={projectColumns} />
        </div>
      </div>
    </div>
  );
}
