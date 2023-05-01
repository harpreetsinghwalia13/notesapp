const yargs = require('yargs');
const notes = require('./notes.js');
//console.log("hello world");
//console.log(yargs.argv);
//var command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe:'title of note',
            demandOption: true,
            type: 'string'
        }

    },
    builder: {
        body: {
            describe:'body of note',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv){
        //console.log(argv.title);
        //console.log(argv.body);
        notes.saveNotes(argv.title,argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe:'remove a note',
            demandOption: true,
            type: 'string'
        }},
    handler: function (argv){
        //console.log(argv.title);
        //console.log(argv.body);
        notes.deleteNotes(argv.title);}
});

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function (){
        console.log("list notes");
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function (){
        console.log("reading a note");
    }
})

if(command="add"){
   // console.log("add command");
}
if(command="remove"){
   // console.log("remove command");
}

yargs.parse();