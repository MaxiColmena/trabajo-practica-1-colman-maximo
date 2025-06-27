import express from "express";
import initDB from "./config/db.js";
import Character from "./routes/character.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/characters", Character);
const PORT = process.env.PORT || 8080;

initDB().then(()=>{
    app.listen(PORT, ()=>{
       console.log(`El servidor esta corriendo en: ${PORT}`); 
    })
})