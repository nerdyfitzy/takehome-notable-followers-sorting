import { SortableTable, type Column } from './SortableTable';
import { notableFollowers, type NotableFollower } from './data';

const columns: Column<NotableFollower>[] = [
  { key: 'fullname', label: 'User' },
  { key: 'country', label: 'Country' },
  { key: 'followers', label: 'Followers' },
];

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1 style={{ fontSize: 20 }}>Notable Followers (Instagram)</h1>
      <p style={{ color: '#666' }}>
        Click the <strong>Followers</strong> header to sort. Largest should be on top.
      </p>
      <SortableTable columns={columns} rows={notableFollowers} />
    </main>
  );
}
