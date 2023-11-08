import { useState } from "react";

export function useFilterOnFields<T extends Record<keyof T, string | number>>({
  fields,
}: {
  fields: (keyof T)[];
}) {
  const [filterField, setFilterField] = useState("");

  const filterBy = (value: string) => {
    setFilterField(value.toUpperCase());
  };

  const filterFn = (value: T) => {
    if (!filterField) {
      return true;
    }
    return fields.some((field) =>
      value[field].toString().toUpperCase().includes(filterField)
    );
  };

  return {
    filterBy,
    filterFn,
  };
}
