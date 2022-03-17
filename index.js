'use strict';

const hapiLambda = require('hapi-lambda');
const genome = require('./routes/geneLocusSearch');
const name = require('./routes/geneNameSearch');
// const mongoose = require('mongoose');

hapiLambda.configure([
    genome,
    name
]);
exports.handler = hapiLambda.handler;
// process.on('SIGINT', function() {  
//     mongoose.connection.close(function () { 
//       console.log('Mongoose default connection disconnected through app termination'); 
//       process.exit(0); 
//     }); 
//   }); 