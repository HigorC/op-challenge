import { MongoClient } from "mongodb";
import * as fs from 'fs'

const uri = 'mongodb://root:123@localhost:27017/';
const jsonFolder = './data'
const dbName = 'mongo_beers'
const collection = 'beers'

const client = new MongoClient(uri);

/**
 * Get all jsons/beers inside the data.
 * 
 * @returns {Object[]}
 */
function getAllData() {
    const beers = []

    fs.readdirSync(jsonFolder).forEach((file) => {
        const beer = JSON.parse(fs.readFileSync(`${jsonFolder}/${file}`, 'utf-8'))
        beers.push(beer)
    });
    return beers
}

/**
 * Seed the mongoDB with a base of beers.
 */
async function seedDB() {
    try {
        const database = client.db(dbName);
        const beersCollection = database.collection(collection);

        const beers = getAllData()
        await beersCollection.insertMany(beers)
    } finally {
        await client.close();
    }
}
seedDB().catch(console.dir);
