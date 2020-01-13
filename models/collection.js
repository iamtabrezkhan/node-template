const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    name: {
        type: String
    },
    created: {
        type: Number,
        default: Date.now()
    },
    description: {
        type: String
    },
    thumbUrl: {
        type: String
    },
    prints: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'print'
    }]
})

const Collection = mongoose.model('collection', collectionSchema);

module.exports = Collection;