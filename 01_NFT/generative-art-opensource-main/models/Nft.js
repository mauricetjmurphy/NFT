const mongoose = require("mongoose");

const NftSchema = mongoose.SchemaType({
    dna: { type: Number },
    name: { type: String },
    description: { type: String },
    image: { tyep: String },
    edition: { type: Number },
    date: { type: Number },
});

module.exports = mongoose.model("Nfts", NftSchema);
