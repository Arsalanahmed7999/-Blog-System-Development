const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    author:{
        type:String,
        required:true,
    },
    title :{
        type:String,
        required:true
    }
})

const booksTable = mongoose.model("book", booksSchema);

// exporting booksTable
module.exports = booksTable;