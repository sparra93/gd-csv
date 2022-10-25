import Csv from '../models/csv.js';
import Operations from '../models/operations.js';
import Display from '../models/display.js';

export default async function run({ path, transformTo, delimiter }) {
  console.time('The document was processed in');
  const csv = new Csv(path, delimiter);
  const operations = new Operations();
  const data = await csv.loadData();
  const square = operations[transformTo](data);
  Display.inRow(square);
  console.timeEnd('The document was processed in');
}
