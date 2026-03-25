import express from 'express';
import client from './db/mongodb.js';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

async function run() {
    try {
        // console.log("starting...")
        // await client.connect();
        // await client.db("admin").command({ ping: 1 });

        // console.log("DB connected and verified ");

        app.get('/ques', (req, res) => {
            res.json({"questions":[`There is a closed room with three light bulbs inside.
                       You have a closed room containing three light bulbs.
                       Outside the room, there are three switches, each connected to exactly one bulb (but you don’t know the mapping).
                       You can toggle the switches (on/off) in any way before entering the room.
                       You may open the door and enter the room only once.
                       Once inside, you cannot touch the switches again — you can only observe the bulbs.
                       How can you determine which switch controls which bulb in a single visit?`,`hello`]
                    })
        });

        app.get('/ans', (req, res) => {
            res.json({"answers":[`Let the three switches be X, Y, and Z, and let them control three light bulbs inside the room.
                       Turn on switch X and leave it on for 5 to 10 minutes.
                       After that time, turn off switch X and turn on switch Y.
                       Leave switch Z off the entire time.
                       Now open the door and enter the room.
                       Inside the room, observe the following:
                       
                       The bulb that is on is connected to switch Y (since it was turned on most recently).
                       Of the remaining two bulbs:
                       The bulb that is off but warm is connected to switch X (it was on earlier and is still warm).
                       The bulb that is off and cold is connected to switch Z (it was never turned on).`,`helloanswer`]
                    })
        });


        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });

    } catch (e) {
        console.error("Startup error:", e);
    }
}

run();