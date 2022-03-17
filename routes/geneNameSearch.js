'use strict';
const Joi = require('joi');
const mongoUtils = require('../mongoUtilsUpdated');

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
            path: '/v2/{genome}/genes/queryName',
            config: {
                description: 'Gene name query',
                notes: 'Returns list of gene names or refGene records matching query',
                tags: ['api'],
                validate: {
                    params: {
                        genome: Joi
                            .string()
                            .required()
                            .description('Genome name')
                            .default('hg19')
                    },
                    query: {
                        q: Joi
                            .string()
                            .required()
                            .description('String that gene name must start with'),
                        isExact: Joi
                            .bool()
                            .description('Whether the query must match exactly')
                            .default(false),
                        getOnlyNames: Joi
                            .bool()
                            .description('Whether to get only a list of matching names, or full records')
                            .default(false)
                    }
                }
            },
            handler: async function (request, reply) {

                const {genome} = request.params;
                const endAssertion = request.query.isExact
                    ? '$'
                    : '';
                const QUERY = {
                    name: {
                        $regex: `^${encodeURIComponent(request.query.q)}${endAssertion}`,
                        $options: 'i' // i means case insensitive
                    }
                };
                try {
                    let res = await mongoUtils.fetchFromMongo(genome, QUERY, request.query.getOnlyNames);
                    reply(res);
                } catch (err) {
                    reply(createErrorResponse(err.statusCode, err.message));
                }
            }
        });

        return next();
    });
};

exports.register.attributes = {
    // pkg: {   name: 'api',   version: '1.0.0' }
    name: 'genename'
};
