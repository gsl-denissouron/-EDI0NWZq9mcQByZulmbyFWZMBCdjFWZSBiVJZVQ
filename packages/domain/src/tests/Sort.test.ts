import { describe, beforeEach, it, expect } from "vitest";

import { Sort, SortConfig } from "@domain/entities/Sort";

interface FooBar {
  foo: string;
  bar: number;
}

describe("Sort", () => {
  let sortConfig!: SortConfig<FooBar>;
  beforeEach(() => {
    sortConfig = new SortConfig<FooBar>();
  });

  it("should return no sort by default", () => {
    expect(sortConfig.sort).toStrictEqual<Sort<FooBar>>("none");
  });
});
