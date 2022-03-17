sls invoke local -f api

mongoimport --uri mongodb://XXX:XXXX@ds261296.mlab.com:61296/galgal6 \
-c features \
--file ./genomeData/galGal6/refGene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

dpuru [11:19 AM] - July15, 2019
https://lambda.epigenomegateway.org/v2/galGal5/genes/refGene/queryRegion?chr=chr4&start=45985744&end=45991655
https://lambda.epigenomegateway.org/v2/galGal6/genes/refGene/queryRegion?chr=chr1&start=196023421&end=196053237

dpuru [] - Aug 23, 2019

https://lambda.epigenomegateway.org/v2/ce11/genes/refGene/queryRegion?chr=chrII&start=14646376&end=14667875
https://lambda.epigenomegateway.org/v2/dm6/genes/refGene/queryRegion?chr=chr2L&start=826001&end=851000

dpuru [] - Jan 16, 2020
mongoimport --uri mongodb://XXX:XXXX@ds263808.mlab.com:63808/aplcal3 \
-c features \
--file ./AplCal3.sort.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

dpuru [] - Jan 27, 2020

"sacCer3": {
"refGene": "ds023500.mlab.com:23500/saccer3_ncbirefseq",
"sgdGene": "ds023500.mlab.com:23500/saccer3_sgdgene"
}

/Users/dpuru/scratch/2020/JAN/genome_serverless/sacCer3
mongoimport --uri mongodb://XXX:XXXX@ds023500.mlab.com:23500/saccer3_ncbirefseq \
-c features \
--file ./ncbiRefSeq_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

mongoimport --uri mongodb://XXX:XXXX@ds023500.mlab.com:23500/saccer3_sgdgene \
-c features \
--file ./sgdGene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

---

Feb11, 2020

mongoimport --uri mongodb://XXX:XXXX@ds163517.mlab.com:63517/sars \
-c features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/sars_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb://XXX:XXXX@ds213079.mlab.com:13079/mers \
-c features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/mers_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb://XXX:XXXX@ds163517.mlab.com:63517/ncov2019 \
-c features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/ncov_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb://XXX:XXXX@ds213079.mlab.com:13079/ebola \
-c features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/ebola_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

---

update mongodb to mongodb://XXX:XXXX@167.99.7.63:27017

Aug 02, 2020

---

mongoimport --uri mongodb://XXX:XXXX@167.99.7.63:27017/genedata \
-c ebola_features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/ebola_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb://XXX:XXXX@167.99.7.63:27017/genedata \
-c features \
--file /Users/dpuru/scratch/2020/JAN/data-parsing-virus-browser/gene_annotations/virusGateway/ebola_refGenome_annotations.gff3.refbed \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb://XXX:XXXX@ds261296.mlab.com:61296/genedata \
-c galgal6 \
--file ./genomeData/galGal6/refGene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

## Sep 10, 2020

"sacCer3": {
"refGene": "ds023500.mlab.com:23500/saccer3_ncbirefseq",
"sgdGene": "ds023500.mlab.com:23500/saccer3_sgdgene"
}

/Users/dpuru/scratch/2020/JAN/genome_serverless/sacCer3
mongoimport --uri mongodb://XXX:XXXX@ds023500.mlab.com:23500/saccer3_ncbirefseq \
-c features \
--file ./ncbiRefSeq_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

mongoimport --uri mongodb://XXX:XXXX@ds023500.mlab.com:23500/saccer3_sgdgene \
-c features \
--file ./sgdGene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

const Pfal3D7 = [
{
name: "PlasmoDBGene",
file: "PlasmoDB9Gene_load",
fieldsConfig: geneFieldsAndIndex
}
];

/Users/dpuru/scratch/2020/JAN/genome_serverless/Pfal3D7

mongodb://XXX:XXXX@ds151232.mlab.com:51232/pfal3d7

mongoimport --uri mongodb://XXX:XXXX@ds151232.mlab.com:51232/pfal3d7 \
-c features \
--file /Users/dpuru/scratch/2020/JAN/genome_serverless/Pfal3D7/PlasmoDB9Gene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

=============

Sep 30, 2020

const Creinhardtii506 = [
{
name: "PhytozomeGene",
file: "Creinhardtii506_load",
fieldsConfig: geneFieldsAndIndex,
},
];

/Users/dpuru/scratch/2020/JAN/genome_serverless/Creinhardtii506

mongodb://XXX:XXXX@ds113636.mlab.com:13636/creinhardtii506

mongoimport --uri mongodb://XXX:XXXX@ds113636.mlab.com:13636/creinhardtii506 \
-c features \
--file /Users/dpuru/scratch/2020/JAN/genome_serverless/Creinhardtii506/Creinhardtii506_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

=============

Oct 09, 2020

const panTro6 = [
{
name: "refGene",
file: "refGene_load",
fieldsConfig: geneFieldsAndIndex,
},
];

/Users/dpuru/scratch/2020/JAN/genome_serverless/panTro6

mongodb://XXX:XXXX@ds113636.mlab.com:13636/creinhardtii506

mongoimport --uri mongodb://XXX:XXXX@ds147079.mlab.com:47079/pantro6 \
-c features \
--file /Users/dpuru/scratch/2020/JAN/genome_serverless/panTro6/refGene_load \
--type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

=============

Dec 02, 2020

calJac3

mongoimport --uri mongodb://XXX:XXXX@ds151242.mlab.com:51242/caljac3_ensgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/calJac3/ensGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

mongoimport --uri mongodb://XXX:XXXX@ds151242.mlab.com:51242/caljac3_ncbigene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/calJac3/ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

ensGene_load
ncbiRefSeq_load

"calJac3": {
"ensGene": "ds151242.mlab.com:51242/caljac3_ensgene",
"ncbiGene": "ds151242.mlab.com:51242/caljac3_ncbigene"
},

---

panTro4

"panTro4": {
"ensGene": "ds239648.mlab.com:39648/pantro4_ensgene",
"refGene": "ds239648.mlab.com:39648/pantro4_refgene"
},

mongoimport --uri mongodb://XXX:XXXX@ds239648.mlab.com:39648/pantro4_ensgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/pantro4/ensGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

mongoimport --uri mongodb://XXX:XXXX@ds239648.mlab.com:39648/pantro4_refgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/pantro4/refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

nomLeu3

"nomLeu3": {
"ensGene": "ds151242.mlab.com:51242/nomleu3_ensgene"
},

mongoimport --uri mongodb://XXX:XXXX@ds151242.mlab.com:51242/nomleu3_ensgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/nomLeu3/ensGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

gorGor3

"gorGor3": {
"ensGene": "ds151242.mlab.com:51242/gorfor3_ensgene"
},

mongoimport --uri mongodb://XXX:XXXX@ds151242.mlab.com:51242/gorfor3_ensgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/gorGor3/ensGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

papAnu2,

"papAnu2": {
"ensGene": "ds343895.mlab.com:43895/papanu2"
},

mongoimport --uri mongodb://XXX:XXXX@ds343895.mlab.com:43895/papanu2 \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/papAnu2/ensGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

rheMac3,

"rheMac3": {
"refGene": "ds033639.mlab.com:33639/rhemac3_refgene"
},

mongoimport --uri mongodb://XXX:XXXX@ds033639.mlab.com:33639/rhemac3_refgene \
-c features \
--file /Users/dpuru/MOLSTAR-eg-react/eg-react/backend/genomeData/rheMac3/refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description \
--numInsertionWorkers 4

Jan 27, 2021
added mm39_refGene

Aug 29, 2021
added t2t-chm13-v1.1

Nov 28, 2021
added xenTro10
/Users/dpuru/SERVERLESS/data

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c xenTro10-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c xenTro10-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

Jan 14, 2022
added /Users/dpuru/SERVERLESS/data/susScr11

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c susScr11-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c susScr11-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

added /Users/dpuru/SERVERLESS/data/oviAri4

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c oviAri4-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c oviAri4-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

cd b_chiifu_v3
mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c b_chiifu_v3-gene --file Brapa_genome_v3.0_genes.gff3.refbed --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

## Feb 08, 2022

added /Users/dpuru/SERVERLESS/data/calJac4

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c calJac4-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

rheMac10

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c rheMac10-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c rheMac10-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

susScr3

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c susScr3-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c susScr3-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

## Mar 02, 2022

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c rn7-refGene --file refGene_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description

mongoimport --uri mongodb+srv://XXX:XXXX@cluster1.e3dfn.mongodb.net/genedata -c rn7-ncbiGene --file ncbiRefSeq_load --type tsv \
-f chrom,txStart,txEnd,cdsStart,cdsEnd,strand,name,id,transcriptionClass,exonStarts,exonEnds,description
