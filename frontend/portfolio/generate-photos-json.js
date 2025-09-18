const fs = require("fs");
const path = require("path");
const { imageSize } = require("image-size");

const photosDir = path.join(__dirname, "public/images/photography");
const outputFile = path.join(__dirname, "public/photos.json");

const files = fs.readdirSync(photosDir);

const photos = files
    .filter((file) => /\.(jpe?g|png|gif|svg)$/i.test(file))
    .map((file) => {
        const filePath = path.join(photosDir, file);

        // const { width, height } = imageSize(filePath);

        return {
            src: `/images/photography/${file}`,
            width: 4,
            height: 3,
        };
    });

fs.writeFileSync(outputFile, JSON.stringify(photos, null, 2));

console.log(`✅ Generated ${outputFile} with ${photos.length} photos`);
