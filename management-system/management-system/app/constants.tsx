import { Column } from './interface/column';

//Project interface
type Project = {
  name: string;
  status: string;
  employees: number;
};

export const projectColumns: Column<Project>[] = [
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status' },
  { key: 'employees', title: 'Employees' },
];

export const projects: Project[] = [
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

//Employee interface
type Employee = {
  name: string;
  position: string;
  projects: string;
};

export const employeeColumns: Column<Employee>[] = [
  { key: 'name', title: 'Name' },
  { key: 'position', title: 'Position' },
  { key: 'projects', title: 'Projects' },
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
