const express = require("express")
const router = express.Router();

router.get('/', (req, res)=> {
    res.status(200).json({message:"Hello world"});
})

router.get('/home', (req, res)=> {
    res.status(200).render('home');
})


module.exports = router

