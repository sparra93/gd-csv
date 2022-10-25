export default class Operations {
  getSquares(data) {
    return [
      ...data.map((row) => (
        row.map((column) => (
          !Number.isNaN(column)
            ? column ** 2
            : `${column} is not a number`
        ))))];
  }
}
