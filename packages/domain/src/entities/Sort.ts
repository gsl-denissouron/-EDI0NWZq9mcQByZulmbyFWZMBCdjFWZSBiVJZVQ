export type Direction = "ASC" | "DESC";
export interface Sort<T> {
  column: keyof T | undefined;
  direction: "ASC" | "DESC";
}
export interface ActiveSort {
  active: boolean;
  direction: Direction;
}

export const sortBy =
  <T>(column: keyof T) =>
  (sort: Sort<T>): Sort<T> => {
    if (!sort.column) {
      return {
        column,
        direction: "ASC",
      };
    }

    if (sort.column === column && sort.direction === "ASC") {
      return {
        column,
        direction: "DESC",
      };
    }

    if (sort.column === column && sort.direction === "DESC") {
      return {
        column: undefined,
        direction: "ASC",
      };
    }

    return {
      column,
      direction: "ASC",
    };
  };

export const compareFn = <T extends string | number>(a: T, b: T) =>
  typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b)
    : (a as number) - (b as number);

export const sortFn = <T extends Record<keyof T, number | string>>(
  rows: T[],
  { column, direction }: Sort<T>
): T[] => {
  if (!column) {
    return rows;
  }

  return [...rows].sort((a, b) =>
    direction === "ASC"
      ? compareFn(a[column], b[column])
      : compareFn(b[column], a[column])
  );
};
