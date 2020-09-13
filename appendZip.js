// require modules
const fs = require('fs');
const fsp = fs.promises
const archiver = require('archiver');
const extract = require('extract-zip')

module.exports = appendZip

async function appendZip(source, callback) {
    try {
        let tempDir = source + "-temp"

        // create temp dir (folder must exist)
        await fsp.mkdir(tempDir, { recursive: true })

        // extract to folder
        await extract(source, { dir: tempDir })

        // delete original zip
        await fsp.unlink(source)

        // recreate zip file to stream archive data to
        const output = fs.createWriteStream(source);
        const archive = archiver('zip', { zlib: { level: 9 } });

        // pipe archive data to the file
        archive.pipe(output);

        // append files from temp directory at the root of archive
        archive.directory(tempDir, false);

        // callback to add extra files
        callback.call(this, archive)

        // finalize the archive
        await archive.finalize();

        // delete temp folder
        fs.rmdirSync(tempDir, { recursive: true })

    } catch (err) {
        // handle any errors
        console.log(err)
    }
}