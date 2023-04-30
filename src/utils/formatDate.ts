export class formatDate {
  #date: Date;
  constructor(date: Date | string) {
    if (date instanceof Date) this.#date = date;
    else if (typeof date === "string") this.#date = new Date(date);
    else this.#date = new Date(date);
  }

  /**
   * yyyy年mm月dd日に整形する
   * @returns yyyy年mm月dd日
   */
  toJpDateString = () => {
    return `${this.#date.getFullYear()}年${
      this.#date.getMonth() + 1
    }月${this.#date.getDate()}日`;
  };

  /**
   * yyyy年mm月dd日（曜日）に整形する
   * @returns yyyy年mm月dd日（曜日）
   */
  toJpDateWithWeek = () => {
    const week = ["日", "月", "火", "水", "木", "金", "土"];
    const dayOfWeek = week[this.#date.getDay()];
    if (this.#date === undefined || dayOfWeek === undefined) return "ー";
    return `${this.toJpDateString()}（${dayOfWeek}）`;
  };
}
