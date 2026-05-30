import { useMemo, useState } from 'react';
import { sortRows, type SortDirection } from './sortUtils';

export interface Column<T> {
  key: keyof T & string;
  label: string;
}

interface Props<T> {
  columns: Column<T>[];
  rows: T[];
}

export function SortableTable<T extends { id: number | string }>({ columns, rows }: Props<T>) {
  const [sortKey, setSortKey] = useState<(keyof T & string) | null>(null);
  const [direction, setDirection] = useState<SortDirection>('desc');

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    return sortRows(rows, sortKey, direction);
  }, [rows, sortKey, direction]);

  const onHeaderClick = (key: keyof T & string) => {
    if (key === sortKey) {
      setDirection((d) => (d === 'desc' ? 'asc' : 'desc'));
    } else {
      setSortKey(key);
      setDirection('desc');
    }
  };

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 640 }}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => onHeaderClick(col.key)}
              style={{
                cursor: 'pointer',
                textAlign: 'left',
                borderBottom: '2px solid #ddd',
                padding: '8px 12px',
                userSelect: 'none',
              }}
            >
              {col.label}
              {sortKey === col.key ? (direction === 'desc' ? ' ↓' : ' ↑') : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row) => (
          <tr key={String(row.id)}>
            {columns.map((col) => (
              <td key={col.key} style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
