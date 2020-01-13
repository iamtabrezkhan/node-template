const mongoose = require('mongoose');

const printSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number,
        default: 0.00
    },
    created: {
        type: Number,
        default: Date.now()
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    thumbUrl: {
        type: String
    },
    printcollection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'collection'
    },
    featured: {
        type: Boolean,
        default: false
    }
})

const Print = mongoose.model('print', printSchema);

module.exports = Print;