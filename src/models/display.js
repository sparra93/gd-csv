export default class Display {
  static inRow(data) {
    data
      .flatMap((value) => value)
      .forEach((value) => console.log(value));
  }
}
