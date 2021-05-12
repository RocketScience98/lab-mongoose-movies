const { Schema, model } = require('mongoose') 
const celebritySchema = new Schema(
    {
        name: String,
        occupation: String,
        catchPhrase: String,
        image: String
    }
)
module.exports = model('Celebrity', celebritySchema)