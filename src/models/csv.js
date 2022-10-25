import { promises } from 'fs';
import { exit } from 'process';
import axios from 'axios';
import { isValidUrl } from '../utils/helpers.js';

export default class CSV {
  constructor(filePath, delimiter) {
    this.filePath = `${filePath}`;
    this.delimiter = delimiter;
  }

  async loadData() {
    try {
      const data = await (
        isValidUrl(this.filePath)
          ? this.readFileFromRemote()
          : this.readFile());
      this.data = this.extracSimpleCsv(data.toString());
      return this.data;
    } catch (err) {
      console.log('The file\'s information could not be read.');
      console.log(err);
      return exit(1);
    }
  }

  async readFile() {
    try {
      return promises.readFile(`${this.filePath}`);
    } catch (err) {
      console.log('The file could not be loaded. Verify the url and try again.');
      console.log(err);
      return exit(1);
    }
  }

  async readFileFromRemote() {
    return axios({
      method: 'get',
      url: `${this.filePath}`,
      responseType: 'blob',
    }).then(({ data }) => data).catch((err) => {
      console.log('The file could not be loaded from remote server. Verify the url and try again.');
      console.log(err);
      return exit(1);
    });
  }

  extracSimpleCsv(data) {
    return data
      .toString()
      .split(/(?:\r\n|\n)+/)
      .slice(1)
      .map((line) => line.split(this.delimiter));
  }
}
