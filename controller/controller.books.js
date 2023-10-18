// importing models
const { set } = require('mongoose');
const requireModel = require('../models/books.models');

// get method
exports.getData = (req, res) => {
    requireModel.find().then(
        (book) => {
            res.status(200).json({
                message: 'Successfully fetched the data',
                book
            })
        }
    ).catch((error)=>{
        console.log(err);
    })
}

// get posts by id
exports.getDataID = (req, res)=>{
    requireModel.findOne({_id:id}).then((book)=>
    res.status(200).json({
        message: 'Successfully fetched the data',
        book
    })).catch((error)=>{
        res.status(500).json({
            message:'Error getting the data',
            error
        })
    })
}

// post api

exports.savePost = (req, res)=>{
    const {author, title} = req.body;
    requireModel.create({
        id:requireModel.length+1,
        author:author,
        title:title
    }).then(success=>{
        res.status(201).json({
            message: "Successfully posted",
            success
        })
    }).catch((error)=>{
        res.status(500).json({
            message: "failed to post",
            error:error
        })
    })
}




exports.editPost = (req, res)=>{
    const {author, title} = req.body;
    const id = req.params.id;
    requireModel.updateOne(
        {_id:id},
        {$set:{
            author,
            title
        }}
    ).then((successfullyupdated)=>{
        res.status(201).json({
            message: 'Successfully Updated',
        })
    }).catch((error)=>{
        res.status(500).json({
            message: 'Cannot update',
            error
        })
    })
}

exports.deletePost = (req, res) =>{
    requireModel.deleteOne({_id:id}).then((success)=>{
        res.status(200).json({
            message: 'Successfully deleted',
            success
        })
    }).catch((error)=>{
        res.status(500).json({
            message:'cannot delete',
            error
        })
    })
}


