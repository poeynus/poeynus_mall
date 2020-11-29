import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const db = mongoose.connection;
const handlerOpen = () => console.log("Connected to DB");
const handleError = () => console.log("Error on DB");

db.once("open", handlerOpen);
db.on("errdr", handleError);