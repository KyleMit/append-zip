const { appendZip } = require("./archiver")

main()

async function main() {
    let source = __dirname + "/functions/func.zip"

    appendZip(source, (archive) => {
        archive.file('data.json');
    });
}