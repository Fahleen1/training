import { IColumn } from './interface/interface';

//Project interface
export type Projects = {
  id: string;
  name: string;
  status: string;
  no_of_employees: number;
};

//Employee interface
export type Employee = {
  id: string;
  name: string;
  position: string;
  projects: string[];
};

// Status interface
export type Status = {
  id: string;
  name: string;
};

export const projectColumns: IColumn<Projects>[] = [
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status' },
  { key: 'no_of_employees', title: 'Employees' },
];

export const employeeColumns: IColumn<Employee>[] = [
  { key: 'name', title: 'Name' },
  { key: 'position', title: 'Position' },
  { key: 'projects', title: 'Projects' },
];

export const status: IColumn<Status>[] = [{ key: 'name', title: 'Name' }];
