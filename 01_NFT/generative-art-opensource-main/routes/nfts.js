const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const Nft = require("../models/Nft");
const metaData = require("../output/_metadata.json");

router.get("/", async (req, res) => {
    try {
        const nfts = await Nft.find();
    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/new", (req, res) => {
    metaData.forEach((el) => {
        console.log(el);
        const nft = new Nft({
            dna: el.dna,
            name: el.name,
            description: el.description,
            image: el.image,
            edition: el.edition,
            date: el.date,
            attributes: el.attributes,
        });

        nft.save();
    });
});

module.exports = router;
