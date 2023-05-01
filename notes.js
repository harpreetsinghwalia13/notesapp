const fs = require('fs');

const getNotes = function(){
    var notes =  loadNotes();
}

const saveNotes = function(title,body){
    var notes =  loadNotes();
  //  console.log(notes);
notes.filter(function(note){
    if(note.title !== title){
        notes.push({
            title: title,
            body: body
        });
    }else{
        console.log("duplicate note");
    }
})

    
    console.log(notes);
    fs.writeFileSync('./1-json.json',JSON.stringify(notes));
}

const deleteNotes = function(title){
    var notes =  loadNotes();
    // console.log(notes);
    var notesToKeep = notes.filter(function(note){
        return note.title !== title;
        })

        if(notesToKeep.length !== notes.length)
        {
            console.log("NOTE REMOVED");
        }
    
    console.log(notes);
    fs.writeFileSync('./1-json.json',JSON.stringify(notesToKeep));
}

const loadNotes = function(){
    var buffer = fs.readFileSync("./1-json.json");
    var bufferString = buffer.toString();
    return JSON.parse(bufferString);
}

module.exports = {
    getNotes,
    saveNotes,
    deleteNotes
}
