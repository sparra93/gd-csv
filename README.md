<h1 align="center"> CSV loader [Challenge] </h1>
<p align="center">
  <b>This proyect is a challenge.</b>
</p>

## Description

This project is a node.js app and its purpose is just to show a bit of my knowledge of this.

## Get started

###  Requirements

- `node 16+`

### Run commands

```bash
npm install
```

## How run app

### Examples

Before starting you should know that we have the `procces` command with three options (`--path`, `--transformTo` and `--delimiter` ). Its alias are `-p`, `-t` and `-d`. So if we want to run the command line we should run the following example.

```bash
#Example 1
node app.js process --path="/Users/dummy-user/Desktop/example.csv"  --transformTo="square" --delimiter=","
#Example 2
node app.js process --path="https://my-url/example.csv"  --transformTo="square"
#Example 3
node app.js process --path="https://my-url/example.csv" # transformTo will be square by default and delimiter will be "," by default.
#Example 4
node app.js process --p="/Users/dummy-user/Desktop/example.csv"  --t="square" --d=";"
```

## CSV Examples inputs

```bash
#Example 1
Numbers
1
2
3
4
5
6
7
8
# Ouput
1
4
9
16
25
36
49
64
```

## Approach

### **Pros and Cons**

***¿Why use third party library? and ¿Why not?***

Sometimes we installed libraries to simplify our code, but also we do because these libraries are tested and work fine. Why reinvent the wheel? In this project, we're using Axios and yargs. However to resolve the CSV load I chose to make it without third-party libraries. I applied only my logic and programmed based on standard CSV.

| Requirement | Description |
| --- | --- |
| CSV file as an input | This app can read a remote CSV and local. You should indicate the url with `--path` option  |
| Transform function | We can indicate what operation do throught `--transformTo` option. Currently we have only `square` but if you want to add more you should follow the next steps. <br> - Add in `src/models/operations.js` your logic. <br>- Add your method in the `src/constants/options-method.js` <br>- You should add a command instruction in `src/commands/process.js`. See yargs documentation here https://www.npmjs.com/package/yargs |
| Process time | In this case, I've used console.time to resolve this requirement. See documentation here https://nodejs.org/api/console.html#console_console_time_label
