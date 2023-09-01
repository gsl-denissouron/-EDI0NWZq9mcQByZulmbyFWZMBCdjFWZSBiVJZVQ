export type Direction = "ASC" | "DESC";
export type Sort<T> = "none" | { column: keyof T; direction: Direction };
export type ActiveSort = { active: boolean; direction: Direction };

export class SortConfig<T> {
  private column: keyof T | undefined = undefined;
  private direction: "ASC" | "DESC" = "ASC";

  get sort(): Sort<T> {
    return this.column
      ? { column: this.column, direction: this.direction }
      : "none";
  }

  getFor(column: keyof T): ActiveSort {
    return { active: this.column === column, direction: this.direction };
  }

  sortBy(column: keyof T): this {
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
}
