const mongooose = require('mongoose')
const Review = require('./review')

const productSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    desc: {
        type: String
    },
    reviews: [{
        type: mongooose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

const Product = mongooose.model('Product', productSchema)
module.exports = Product