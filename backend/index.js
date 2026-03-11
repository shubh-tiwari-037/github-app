
const express = require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors = require("cors");
const http=require("http");
const bodyParser=require("body-parser");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

dotenv.config();

yargs(hideBin(process.argv))
.command("strt","Starts a new server",{},startServer)
.command(
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
       (argv)=>{
    revertRepo(argv.commitID)
}
)
.demandCommand(1,"you need at least one command")
.help().argv;


function startServer(){
    const app=express()
    const port = process.env.PORT ||3000;

    app.use(bodyParser.json());
    app.use(express.json())

    const mongoURI= process.env.MONGODB_URI;

    mongoose.connect(mongoURI)
    .then(()=> console.log("Mongodb connect!"))
    .catch((err)=> console.error("unable to connect db",err));
}