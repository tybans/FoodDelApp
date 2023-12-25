const mongoose = require('mongoose');

const URL = process.env.MONGO_URL

async function main() {
    try {
        await mongoose.connect(URL)
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error, "Couldn't connect MongoDB properly...");
    }
}

module.exports = main