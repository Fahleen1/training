export type Project = {
  id: number;
  name: string;
  status: string;
  employees: number;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Project A',
    status: 'In Progress',
    employees: 3,
  },
  {
    id: 2,
    name: 'Project B',
    status: 'Completed',
    employees: 2,
  },
];

export type Employee = {
  id: number;
  name: string;
  position: string;
  projects: string;
};

export const employees: Employee[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Developer',
    projects: 'Project A',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Designer',
    projects: 'Project B',
  },
];
