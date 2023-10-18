const express = require('express');
const router = express.Router();
const {getData, getDataID, savePost, editPost, deletePost} = require('../controller/controller.books');
// get
router.get('/data', getData);
// getid
router.get('/data/:id', getDataID);
// post
router.post('/savePost', savePost);
// patch
router.patch('/editPost/:id', editPost);
// delete
router.delete('/deletePost/:id', deletePost);

// exporting
module.exports = router