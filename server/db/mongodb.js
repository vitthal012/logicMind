import  { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

console.log("creating client");
const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function connectclus(){
  try{
    console.log("Starting...")

    await client.connect();//cluster connected
    console.log("cluster connected")

    db=client.db("logicmind");//database connected
    console.log("database connected");
  }
  catch(e){
    console.log(e.message);
  }
}



export {connectclus,db};


