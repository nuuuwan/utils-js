export default class StringX {
  static toTitleCase(str) {
    if (str === str.toUpperCase()) {
      return str;
    }
    str = str.replaceAll("_", " ");
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
