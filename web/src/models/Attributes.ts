// extends object fix this.data warning
export class Attributes<T extends object> {
  constructor(private data: T) { }

  // Advanced generic constraint
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}