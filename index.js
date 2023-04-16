const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, IP_SERVER } = require("./constant");
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majorit`
mongoose.connect(url).then(() => {
    console.log('Connected to database!');
}).catch((error) => {
    console.log('Error connecting to database:', error);
});
