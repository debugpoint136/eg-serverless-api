'use strict';
const _ = require('lodash');
const mongoose = require('mongoose');
const MLABURILOOKUP = require('./mlab_uri_lookup.json');
// const genomeConfig = require('./genomeConfig');
const GenomeSchema = require('./model/genome.js');

// const Schema = mongoose.Schema; const GenomeSchema = new Schema({     chrom:
// String,     txStart: Number,     txEnd: Number,     cdsStart: Number, cdsEnd:
// Number,     strand: String,     name: String,     id: String,
// transcriptionClass: String,     exonStarts: String,     exonEnds: String,
// description: String });

async function getMongoClient(genome, collection) {

    const uri = MLABURILOOKUP[genome][collection];
    // const URL = `mongodb://XXX:XXXX@${uri}`;
    const URL = `mongodb://XXX:XXXX@167.99.7.63:27017/genedata`;
    const conn = mongoose.createConnection(URL);
    // conn.on('disconnected', () => console.log('disconnected')); conn.on('open',
    // () => console.log('connection available now!'))
    return conn;
}

async function createConnections(genome, QUERY) {
    console.log(genome);
    const genomeObj = MLABURILOOKUP[genome];
    let collectionsForGenome = [];
    if (genomeObj) {
        collectionsForGenome = Object
            .keys(MLABURILOOKUP[genome])
            .map(d => ({name: d}));
    }
    try {
        // const CONNECTIONPOOL = await makeObjectOfConnections(genome);  // creates
        // separate database connections
        let resultPromises = Object
            .keys(MLABURILOOKUP[genome])
            .map((entry, index) => {

                // let conn = CONNECTIONPOOL[entry]; const mongoString =
                // `mongodb://XXX:XXXX@167.99.7.63:27017/genedata`; // DIGITALOCEAN
                const mongoString = `mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata`; // MONGODB ATLAS
                const COLLECTION_STR = `${genome}-${entry}`;
                const GenomeModel = mongoose.model('feature', GenomeSchema, COLLECTION_STR);
                const options = {
                    server: {
                        socketOptions: {
                            keepAlive: 1,
                            connectTimeoutMS: 30000
                        }
                    }
                };
                mongoose.connect(mongoString, options);
                let db = mongoose.connection;
                // const ConnCurrent = conn.model('feature', GenomeSchema); const ConnCurrent =
                // GenomeModel('feature', GenomeSchema);
                const queryPromise = executeQuery(GenomeModel, QUERY, entry);
                return queryPromise;

            })

        try {
            const results = await Promise.all(resultPromises);
            return results;
        } catch (error) {
            throw new Error(error);
        }
    } catch (error) {
        throw new Error(error);
    }

}
/**
 *
 * @param {string} genome
 * @param {string} QUERY
 * @param {boolean} getOnlyNames
 */
async function fetchFromMongo(genome, QUERY, getOnlyNames) {
    try {
        let data = await createConnections(genome, QUERY);
        let results = _.flatten(data);
        if (getOnlyNames) {
            return _.uniq(results.map(record => record.name));
        } else {
            return results;
        }
    } catch (error) {
        throw new Error(error);
    } finally {
        mongoose
            .connection
            .close(function () {
                // console.log('Mongoose default connection disconnected through app
                // termination'); process.exit(0);
            });
    }
}

/**
 *
 * @param {string} genome
 */
async function makeObjectOfConnections(genome) {
    /*
        1. iterate through genomeConfig, fetch the names
        2. make an object of live connection - one for each collection
     */
    const connectionsObj = {}
    const genomeObj = MLABURILOOKUP[genome];
    let collectionsForGenome = [];
    if (genomeObj) {
        collectionsForGenome = Object
            .keys(MLABURILOOKUP[genome])
            .map(d => ({name: d}));
    }
    console.log(collectionsForGenome);
    try {
        for (const collection of collectionsForGenome) {
            const COLLECTION_STR = `${genome}-${collection}`;
            // connectionsObj[collection.name] = await getMongoClient(genome,
            // collection.name);
            connectionsObj[COLLECTION_STR] = await getMongoClient(genome, collection.name);
        }
        return connectionsObj;
    } catch (error) {
        console.error(error.toString());
        console.error("Couldn't establish a MongoDB connection; aborting...");
        return error;
    }
}

/**
 * Executes a find in a collection with the specified MongoClient.
 *
 * @param {string} genomeName - genome name to query
 * @param {string} collectionName - collection name to query
 * @param {Object} query - Mongo query selection filter
 * @param {Object} options - find options
 * @return {Cursor} Cursor that iterates through results
 */

function executeQuery(connection, query, collectionName) {
    return new Promise((resolve, reject) => {
        connection
            .find(query)
            .then(results => {
                const updatedResults = results.map(d => {
                    let tmp = {
                        ...d
                    };
                    const output = {
                        ...tmp._doc
                    };
                    output.collection = collectionName;
                    return output;
                });
                resolve(updatedResults);
            })
            .catch(err => {
                reject(err)
            })
    });
}

module.exports = {
    fetchFromMongo: fetchFromMongo
};
