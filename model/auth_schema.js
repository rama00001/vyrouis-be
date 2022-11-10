const mongoose = require("mongoose");

const user_info_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },

});

module.exports = new mongoose.model('user_infos', user_info_schema)
