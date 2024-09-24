import yargs from "yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    loaf: { type: "string" },
  })
  .parseSync();

console.log("loaf", argv.loaf);
