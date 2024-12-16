import MainHeading from '../components/main-heading';
import Link from 'next/link';
import React from 'react';

import Button from '@/app/components/button';

import ProjectTable from './components/project-table';

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
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}
