import express from "express";
import { SERVER_HOST, SERVER_PORT } from "./src/config/credentials.js";
const app = express();

app.listen(SERVER_PORT, () =>{
    console.log("Servidor funcionando de forma correcta")
    console.log(SERVER_HOST + SERVER_PORT)
})