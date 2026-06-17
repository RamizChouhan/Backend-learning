const mongoose = require('mongoose');

async function connectionMongDb(url){
    return mongoose.connect(url)
}

module.exports = {
    connectionMongDb,
}