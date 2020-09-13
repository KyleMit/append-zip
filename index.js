const appendZip = require("./appendZip")

main()

async function main() {
    let source = __dirname + "/functions/func.zip"

    await appendZip(source, (archive) => {
        archive.file('data.json');
    });
}