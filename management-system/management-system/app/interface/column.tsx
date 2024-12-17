import { ReactElement } from 'react';

export interface Column<T> {
  key: keyof T;
  title: string | ReactElement;
}
