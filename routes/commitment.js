const express = require('express');
const logger = require('../config/logger');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb+srv://root:123@pdm-fqvjj.gcp.mongodb.net/pdm', { useNewUrlParser:true });

require('../model/CommitmentSchema');

const commit = mongoose.model('Commitment');

 router.get('/', async (req, res) =>{
    const compromisse = await commit.find();
     res.send(compromisse);
});

router.get('/:name', async (req, res) =>{
    const compromisse = await commit.find({name:req.body.name});
     res.send(compromisse);
});

router.post('/', (req, res) =>{
    const reqBody = req.body;
    if (reqBody) {
        commit.create(req.body);
        res.sendStatus(201);
    }else{
        res.sendStatus(400);
    }
});

router.delete('/:name', async (req, res)=> {     
    await commit.findOneAndRemove({name:req.params.name});
    res.sendStatus(200);
});
router.delete('/:name', async (req, res)=> {     
    await commit.findOneAndUpdate({name:req.params.name});
    res.sendStatus(200);
});

router.put('/:name', async (req,res)=>{
    await commit.findOneAndUpdate(req.params.name, req.body,{new:true} );
    return res.sendStatus(200);
});
module.exports = router;

