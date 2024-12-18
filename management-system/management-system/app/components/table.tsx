'use client';

import { IColumn } from '../interface/interface';

import ButtonGroup from '@/app/components/button-group';

type TableProps<T> = {
  data: T[];
  columns: IColumn<T>[];
};

export default function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse table-fixed">
        <thead className="text-color-gray border-b">
          <tr className="hover:bg-gray-50">
            {columns.map((column) => (
              <th
                key={column.key as string}
                className="w-1/6 px-4 py-3 text-left"
              >
                {column.title}
              </th>
            ))}
            <th className="w-3/12 px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-gray-50 ${
                rowIndex === data.length - 1 ? '' : 'border-b'
              }`}
            >
              {columns.map((column) => (
                <td
                  key={column.key as string}
                  className="w-1/6 p-4 font-medium text-color-black"
                >
                  {row[column.key] as React.ReactNode}
                </td>
              ))}
              <td className="w-3/12 p-4 font-medium text-color-black">
                <ButtonGroup />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
