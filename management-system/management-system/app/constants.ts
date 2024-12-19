import { IColumn } from './interface/interface';

//Project interface
export type Projects = {
  id: string;
  name: string;
  status: string;
  no_of_employees: number;
};

export const projectColumns: IColumn<Projects>[] = [
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status' },
  { key: 'no_of_employees', title: 'Employees' },
];

//Employee interface
export type Employee = {
  name: string;
  position: string;
  projects: string[];
};

export const employeeColumns: IColumn<Employee>[] = [
  { key: 'name', title: 'Name' },
  { key: 'position', title: 'Position' },
  { key: 'projects', title: 'Projects' },
];
