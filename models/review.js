const mongooose = require('mongoose')

const reviewSchema = mongooose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
})

const Review = mongooose.model('Review', reviewSchema)

module.exports = Review