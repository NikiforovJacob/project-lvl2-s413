#!/usr/bin/env node
import program from 'commander';
import gendiff from '..';
import jsonParse from '../utils';

program
  .version('0.1.8', '-V, --version')
  .option('-f, --format [type]', 'Output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const jsonBefore = jsonParse(firstConfig);
    const jsonAfter = jsonParse(secondConfig);
    console.log(gendiff(jsonBefore, jsonAfter));
  });
program.parse(process.argv);
