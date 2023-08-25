export type Direction = "ASC" | "DESC";
export type Sort<K> = { column: K | undefined; direction: Direction };
export type ActiveSort = { active: boolean; direction: Direction };

export class SortConfig<K> {
  private column: K | undefined = undefined;
  private direction: "ASC" | "DESC" = "ASC";

  get sort(): Sort<K> {
    return { column: this.column, direction: this.direction };
  }

  sortBy(column: K): this {
    if (!this.column) {
      this.column = column;
      this.direction = "ASC";
      return this;
    }

    if (this.column === column && this.direction === "ASC") {
      this.direction = "DESC";
      return this;
    }

    if (this.column === column && this.direction === "DESC") {
      this.column = undefined;
      this.direction = "ASC";
      return this;
    }

    this.column = column;
    this.direction = "ASC";
    return this;
  }

  getFor(column: K): ActiveSort {
    return { active: this.column === column, direction: this.direction };
  }
}
