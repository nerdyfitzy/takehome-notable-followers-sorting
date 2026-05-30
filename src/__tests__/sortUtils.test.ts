import { describe, it, expect } from 'vitest';
import { sortRows } from '../sortUtils';
import { notableFollowers } from '../data';

describe('sortRows — notable followers by follower count', () => {
  it('sorts descending with the largest follower count first', () => {
    const sorted = sortRows(notableFollowers, 'followers', 'desc');
    const counts = sorted.map((r) => Number(r.followers));

    // John Crist (1,000,000) must be at the top when sorting top-to-bottom.
    expect(sorted[0].fullname).toBe('John Crist');

    // The whole column must be in descending numeric order.
    const expected = [...counts].sort((a, b) => b - a);
    expect(counts).toEqual(expected);
  });

  it('sorts ascending with the smallest follower count first', () => {
    const sorted = sortRows(notableFollowers, 'followers', 'asc');
    const counts = sorted.map((r) => Number(r.followers));

    const expected = [...counts].sort((a, b) => a - b);
    expect(counts).toEqual(expected);
  });
});
