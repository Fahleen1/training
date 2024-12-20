import { ReactElement } from 'react';

export type NameProps = {
  id: string;
  name: string;
};

export interface IColumn<T> {
  key: keyof T;
  title: string | ReactElement;
}

export type TableProps<T extends { id: string }> = {
  data: T[];
  columns: IColumn<T>[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export type ParamsProps = {
  params: Promise<{ id: string }>;
};
