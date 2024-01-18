const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("Db connection successful");
    } catch (error) {
        console.error("Error in db connection:", error);
        process.exit(1);
    }
};

module.exports = dbConnect;
