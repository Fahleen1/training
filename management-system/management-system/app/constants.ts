import { IColumn } from './interface/interface';

//Project interface
export type Projects = {
  name: string;
  status: string;
  employees: number;
};

export const projectColumns: IColumn<Projects>[] = [
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status' },
  { key: 'employees', title: 'Employees' },
];

//Employee interface
export type Employee = {
  name: string;
  position: string;
  projects: string;
};

export const employeeColumns: IColumn<Employee>[] = [
  { key: 'name', title: 'Name' },
  { key: 'position', title: 'Position' },
  { key: 'projects', title: 'Projects' },
];
