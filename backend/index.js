

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv)).command(
    "init",
    "initilise new repository",
    {},
    initRepo
)
.command("add <file>" , "add a file to the repository",
    (yargs=>{
        
    }),addRepo)
.demandCommand(1,"you need at least one command")
.help().argv;