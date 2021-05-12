
// Iteration #1
const Celebrity = require('../models/Celebrity.model')
//connects to the database require
require("../configs/db.config")

const celebrities = [
    {
        name: 'Jessica Alba',
        occupation: 'Actor',
        catchPhrase: "I wish there were two of me and 48-hour days so I could get everything done. But for me, I have to not try and think that everything has to be 100% perfect all the time and leave room for error. As long as my kids feel loved and a priority, everything really is secondary.",
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FJessica_Alba&psig=AOvVaw0zhQPQXeQYcTqTG_siy0ZN&ust=1620855569064000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODZi9nLwvACFQAAAAAdAAAAABAD'
    },
    {
        name: 'Brad Pitt',
        occupation: 'Actor',
        catchPhrase: "By nature, I keep moving, man. My theory is, be the shark. You've just got to keep moving. You can't stop",
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBrad_Pitt&psig=AOvVaw2gBwpTelk3PeNot-yktv8b&ust=1620855692333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNirlY7MwvACFQAAAAAdAAAAABAD'
    },
    {
        name: 'Johny Depp',
        occupation: 'Actor',
        catchPhrase: "As a teenager I was so insecure. I was the type of guy that never fitted in because he never dared to choose. I was convinced I had absolutely no talent at all. For nothing. And that thought took away all my ambition too.",
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg'
    },
]
Celebrity.create(celebrities)
    .then(dbcelebrities => {
        console.log(`Created ${dbcelebrities.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(e => console.log(`An error ocurred while creating celebrities in the DB`,e))