import { ReactElement } from 'react';

export type NameProps = {
  id: number;
  name: string;
};

export interface IColumn<T> {
  key: keyof T;
  title: string | ReactElement;
}
