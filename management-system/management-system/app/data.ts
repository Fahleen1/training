import { Employee, Projects } from './constants';

export const projects: Projects[] = [
  {
    name: 'Project A',
    status: 'In Progress',
    employees: 3,
  },
  {
    name: 'Project B',
    status: 'Completed',
    employees: 2,
  },
];

export const employees: Employee[] = [
  {
    name: 'John Doe',
    position: 'Developer',
    projects: 'Project A',
  },
  {
    name: 'Jane Smith',
    position: 'Designer',
    projects: 'Project B',
  },
];
