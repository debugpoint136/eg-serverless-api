'use strict';
const Joi = require('joi');
const mongoose = require('mongoose');
const Boom = require('boom');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;
const GenomeSchema = require('../model/genome.js');
const MLABURILOOKUP = require('../mlab_uri_lookup.json');

const createErrorResponse = (statusCode, message) => ({
    statusCode: statusCode || 501,
    headers: {
        'Content-Type': 'text/plain'
    },
    body: message || 'Incorrect id'
});

exports.register = function (server, options, next) {
    const plugins = [];

    server.register(plugins, () => {
        server.route({
            method: 'GET',
            path: '/test',
            handler: function (request, reply) {
                reply('OK');
            }
        });

        // https://api.epigenomegateway.org/mm10/genes/refGene/queryRegion?chr=chr6&start
        // =49218106&end=55639981

        server.route({
            method: 'GET',
            path: '/v2/{genome}/genes/{collection}/queryRegion',
            config: {
                validate: {
                    params: {
                        genome: Joi
                            .string()
                            .required()
                            .description('Genome name')
                            .default('hg19'),
                        collection: Joi
                            .string()
                            .required()
                            .description('Gene collection name')
                            .default('refGene')
                    },
                    query: {
                        chr: Joi
                            .string()
                            .required()
                            .description('Chromosome')
                            .default('chr7'),
                        start: Joi
                            .number()
                            .required()
                            .description('Start base')
                            .default(27210209),
                        end: Joi
                            .number()
                            .required()
                            .description('End base')
                            .default(27219880)
                    }
                }
            },
            handler: function (request, reply) {
                const {genome, collection} = request.params;
                let uri = null;
                uri = MLABURILOOKUP[genome][collection];
                if (!uri) {
                    reply(createErrorResponse(404, `${genome} and ${collection} is not a valid resource`));
                }
                // const mongoString = `mongodb://XXX:XXXX@${uri}`; const mongoString =
                // `mongodb://XXX:XXXX@167.99.7.63:27017/genedata`; // DIGITALOCEAN
                const mongoString = `mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata`; // MONGODB ATLAS
                const COLLECTION_STR = `${genome}-${collection}`;
                // global.GenomeSchema = global.GenomeSchema || mongoose.model('feature',
                // GenomeSchema, COLLECTION_STR);
                const GenomeModel = mongoose.model('feature', GenomeSchema, COLLECTION_STR);

                mongoose.connect(mongoString);
                let db = mongoose.connection;
                db.once('open', () => {
                    const QUERY = {
                        chrom: encodeURIComponent(request.query.chr),
                        txStart: {
                            $lt: Number.parseInt(request.query.end, 10)
                        },
                        txEnd: {
                            $gt: Number.parseInt(request.query.start, 10)
                        }
                    };
                    GenomeModel
                        .find(QUERY)
                        .then((results) => {
                            reply(results);
                        })
                        .catch((err) => {
                            reply(createErrorResponse(err.statusCode, err.message));
                        })
                        . finally(() => {
                            // Close db connection or node event loop won't exit , and lambda will timeout
                            db.close();
                        });
                });
            }
        });

        return next();
    });
};

exports.register.attributes = {
    // pkg: {   name: 'api',   version: '1.0.0' }
    name: 'refGene'
};
