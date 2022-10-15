// const add=require('./utils.js')

// const sum=add(4,-2)
// console.log(sum)

// const validator=require('validator')
// const getNotes=require('./notes.js')
// const msg=getNotes()
// console.log(msg)

// // console.log(validator.isEmail('andrew@example.com'))

// console.log(validator.isURL('https://mead.io'))

// const chalk=require('chalk')

// const getNotes=require('./notes.js')
// const msg=getNotes()
// console.log(msg)

// // const greenMsg=chalk.green('Success!') 
// // console.log(chalk.green(greenMsg))

// const blueMsg=chalk.blue.inverse.bold('Success!...')
// console.log(blueMsg)

// // console.log(process.argv)
// console.log(process.argv[2])

// const chalk=require('chalk')
// const yargs=require('yargs')
// const getNotes=require('./notes.js')

// const command=process.argv[2]
// console.log(process.argv)

// if(command==='add')
// {
//     console.log('Adding note!')
// }
// else if(command==='remove')
// {
//     console.log('Removing note')
// }

// const chalk=require('chalk')
// const yargs=require('yargs')
// const getNotes=require('./notes.js')

// //Customize yargs version

// yargs.version('1.1.0')

// //add,remove,read,list

// //create add command

// yargs.command({
//     command:'add',
//     describe:'Add a new note',
//     builder:{
//         title:{
//             describe:'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body:{
//             describe: 'Note body',
//             demandOption: true ,
//             type: 'string'
//         }
//     },
//     handler: function(argv) {
//         console.log('Title: ',argv.title)
//         console.log('Body: ',argv.body)
//     }
// })

// //create a remove command

// yargs.command({
//     command:'remove',
//     describe:'remove a note',
//     handler: function(){
//         console.log('Removing a note')
//     }
// })

// //create a list command

// yargs.command({
//     command:'list',
//     describe:'Listing your notes',
//     handler: function(){
//         console.log('Listing out all notes')
//     }
// })

// //create a read command

// yargs.command({
//     command:'read',
//     describe:'read a note',
//     handler: function(){
//         console.log('Reading a notes')
//     }
// })

// //console.log(yargs.argv)
// yargs.parse()


const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

//Customize yargs version

yargs.version('1.1.0')

//add,remove,read,list

//create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true ,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Title: ',argv.title)
        // console.log('Body: ',argv.body)
        notes.addNote(argv.title,argv.body)
    }
})

//create a remove command

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        //console.log('Removing a note')
        notes.removeNote(argv.title)
    }
})

//create a list command

yargs.command({
    command:'list',
    describe:'Listing your notes',
    handler(){
        // console.log('Listing out all notes')
        notes.listNotes()
    }
})

//create a read command

yargs.command({
    command:'read',
    describe:'read a note',
    builder:
    {
        title:{
            describe:'Note title',
            demandOption:true,
            type:'String'
        }
    },
    handler(argv){
        //console.log('Reading a notes')
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)
yargs.parse()


