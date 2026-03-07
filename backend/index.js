

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
      yargs.positional("file",{
        describe:"File to add the staging area",
        type:"string",
      })  
    }),
(argv)=>{
    addRepo(argv.file)
})
.command("commit <message>",
    "commit the staged file",
    (yargs)=>{
        yargs.positional("message",{
            describe:"commit message",
            type:"string"
        })
    },
    (argv)=>{
    commitRepo(argv.message)
}
)
.command("push","push commits to s3",{},pushRepo)
.command("pull","pull commits to s3",{},pullRepo)
.command(
     "revert <commitID>",
    "revert to a specific commit",
    (yargs)=>{
        yargs.positional("commitID",{
            describe:"commit ID to revert to",
            type:"string"
        })
    } ,
    revertRepo
)
.demandCommand(1,"you need at least one command")
.help().argv;