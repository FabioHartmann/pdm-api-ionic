const mongoose = require('mongoose');

const CommitmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
       type:String,
    },
    priority:{
        type:Boolean,
    },
    date: {
        type: String,
    },
    // img: {
    //     type: String,
    // },
    // address:{
    //     type: String,
    // },
});

mongoose.model('Commitment', CommitmentSchema);