import express from 'express';
import client from './db/mongodb.js';

const app = express();
const port = 8000;

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });

        console.log("DB connected and verified ");

        app.get('/', (req, res) => {
            res.send("Server working ");
        });

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });

    } catch (e) {
        console.error("Startup error:", e);
    }
}

run();