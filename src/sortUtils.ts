/**
 * Generic, reusable sorting helpers for our data tables.
 *
 * A column's data type is auto-detected from the values in the column, and the
 * matching comparator is used to sort the rows. This is the same "auto-typed
 * sorting" idea our real table component uses.
 */

export type SortDirection = "asc" | "desc";

export type ColumnDataType = "number" | "string";

function isNumber(value: unknown): boolean {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();
  return trimmed !== "" && Number.isFinite(Number(trimmed));
}

/**
 * Infers the type of a column by looking at the first non-empty value found
 * in that column.
 */
export function inferColumnType<T>(rows: T[], key: keyof T): ColumnDataType {
  const sample = rows
    .map((row) => row[key])
    .find((value) => value !== undefined && value !== null && value !== "");

  if (isNumber(sample)) {
    return "number";
  }

  return "string";
}

const comparators: Record<ColumnDataType, (a: unknown, b: unknown) => number> =
  {
    number: (a, b) => Number(a) - Number(b),
    string: (a, b) => String(a).localeCompare(String(b)),
  };

/**
 * Returns a new array of rows sorted by `key` in the given `direction`.
 */
export function sortRows<T>(
  rows: T[],
  key: keyof T,
  direction: SortDirection,
): T[] {
  const type = inferColumnType(rows, key);
  const compare = comparators[type];

  const sorted = [...rows].sort((rowA, rowB) => compare(rowA[key], rowB[key]));

  return direction === "desc" ? sorted.reverse() : sorted;
}
