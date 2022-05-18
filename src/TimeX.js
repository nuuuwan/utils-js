export default class TimeX {
  static getUnixTime() {
    return Math.floor(Date.now() / 1000);
  }

  static getDate() {
    return new Date().toISOString().slice(0, 10);
  }

  static getDateID() {
    return TimeX.getDate().replaceAll("-", "");
  }

  static parse(timeString) {
    const [dStr, mStr, yStr] = timeString.split("-");
    return Date.parse([yStr, mStr, dStr].join("-")) / 1000.0;
  }
}
