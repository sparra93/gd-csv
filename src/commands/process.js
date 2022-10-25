import yargs from 'yargs';
import { OptionsMapper } from '../constants/options-method.js';
import run from '../controller/handler.js';

export default function setCommands() {
  yargs
    .middleware((argv) => {
      let { transformTo } = argv;
      transformTo = OptionsMapper[transformTo];
      return { ...argv, transformTo };
    }, true)
    .command({
      command: 'process',
      describe: 'Process a csv file',
      builder: {
        path: {
          describe: 'Url or route to find the file',
          demandOption: true,
          type: 'string',
        },
        transformTo: {
          describe: 'Type of transform. Ex. Square',
          demandOption: true,
          type: 'string',
        },
        delimiter: {
          describe: 'Symbol delimiter. Ex. ,',
          demandOption: true,
          type: 'string',
        },
      },
      handler: (argv) => {
        run(argv);
      },
    })
    .option('path', {
      alias: 'p',
    })
    .option('transformTo', {
      alias: 't',
      default: 'square',
      choices: ['square'],
    })
    .option('delimiter', {
      alias: 'd',
      default: ',',
    });
  yargs.parse();
}
