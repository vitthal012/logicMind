import express from 'express';
import {connectclus,db} from './db/mongodb.js'
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

async function start(){
try {

    await connectclus();
    app.get('/qa',async (req, res) => {
        console.log("retreiving data from db");
        let data=await db.collection("questions").find().toArray();
        console.log("retreived");

        res.json(data[0]);
    });

    app.get('/ans', (req, res) => {
        res.json({"hello":"vitthal"})
    });

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });

} catch (e) {
    console.error("Startup error:", e.message);
}}


start();