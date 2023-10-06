import { useState } from "react";

import { ActiveSort, Sort, sortBy } from "@domain/entities/Sort";

export function useSort<T>() {
  const [sort, setSort] = useState<Sort<T>>({
    column: undefined,
    direction: "ASC",
  });

  const getActiveSortFor = (column: keyof T): ActiveSort => ({
    active: sort.column === column,
    direction: sort.direction,
  });

  const sortByColumn = (column: keyof T) => {
    setSort(sortBy(column));
  };

  return {
    sort,
    getActiveSortFor,
    sortByColumn,
  };
}
