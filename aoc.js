var fs = require("fs");
var path = require("path");

var args = process.argv.slice(2);
var year = process.env.YEAR || new Date().getFullYear();
var day, solve;
var solution;

if (args.length < 1) {
  console.log(
    "Useage: node " + path.basename(__filename) + " <day> [-f input]"
  );
  return;
}

day = args.shift();

solve = require("./lib/" + year + "/day" + day);

if (args.length > 1 && args[0] === "-f") {
  fs.readFile(args[1], (err, buf) => {
    if (err) throw err;
    solution = solve(buf.toString());
    console.log(solution);
  });
  return;
}

solution = solve();
console.log(solution);
