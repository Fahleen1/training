import MainHeading from '../components/main-heading';
import React from 'react';

import Button from '@/app/components/button';

import ProjectTable from './components/project-table';

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col gap-4 p-4 ">
        <MainHeading name="Projects" />
        <div className="flex items-center">
          <Button name="Add New Project" />
        </div>
        <div className="flex items-center">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}
