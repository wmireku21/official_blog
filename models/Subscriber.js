const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    name: {
        type: String, 
        required: true
    },

    email: {
        type: String,
        required: true
    }
});

module.exports = Subscriber = mongoose.model('subscriber', SubscriberSchema);