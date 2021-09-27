const { MODE } = require("./blendMode.js");
const description = "The project aims to provide pussy to the masses";
const baseUri = "https://pixelpussy.io/metadata";

const layerConfigurations = [
    {
        growEditionSizeTo: 2000,
        layersOrder: [
            { name: "Background" },
            { name: "Character" },
            { name: "Eyes" },
            { name: "Head" },
            { name: "Body" },
            { name: "Mouth" },
            ,
        ],
    },
];

const format = {
    width: 512,
    height: 512,
};

const background = {
    generate: true,
    brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
};
