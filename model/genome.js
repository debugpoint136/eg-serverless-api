const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenomeSchema = new Schema({
    chrom: String,
    txStart: Number,
    txEnd: Number,
    cdsStart: Number,
    cdsEnd: Number,
    strand: String,
    name: String,
    id: String,
    transcriptionClass: String,
    exonStarts: String,
    exonEnds: String,
    description: String
});
// CAN be RUNNING, PENDING, ERROR, REQUEUE, COMPLETED
// https://github.com/dherault/serverless-offline/issues/258
// global.GenomeSchema = global.GenomeSchema || mongoose.model('feature', GenomeSchema, 'hg19-gencodeV29');
module.exports = GenomeSchema;
