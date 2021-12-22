const mongoose = require("mongoose")
const schema = mongoose.Schema
const Chat = new schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    reciver_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    sender_type: {
        type: String,
    },
    reciver_type:{
        type:String
    },
    message:{
        type: Array
    },
    Date:{
        type: Date
    },
    is_delete:{
        type:Boolean,
        default:false
    }  
    
},{ timestamps: true }, { strict: false });
var detail = mongoose.model("Chat", Chat)
module.exports = detail