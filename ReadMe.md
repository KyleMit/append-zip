# Append Zip Archive

## Run Sample

```bash
npm install
npm run start
```

## Process

1. Create Temp Directory
2. Extract Zip to Temp Dir
3. Delete Original Zip
4. Build Archive and seed with Temp Dir
5. Callback to append any additional files
6. Finalize Archive
7. Delete Temp Directory

## Usage

```js
const appendZip = require("./appendZip")

async function main() {
    let source = __dirname + "/functions/func.zip"

    await appendZip(source, (archive) => {
        archive.file('data.json');
    });
}
```

## Dependencies

* [archiver](https://www.npmjs.com/package/archiver)
* [extract-zip](https://www.npmjs.com/package/extract-zip)

## Problems

* [node-archiver - Appending to existing archives - Issue #23](https://github.com/archiverjs/node-archiver/issues/23)
* [node-archiver - Can I extract an entire zip with archiver? - Issue #97](https://github.com/archiverjs/node-archiver/issues/97)

## Further Reading

* [How to add my file to an existing zip-folder using node-js in lambda?](https://stackoverflow.com/q/49669155/1366033)
* [Nodejs and update file inside zip archive](https://stackoverflow.com/q/55191756/1366033)
* [Appending file to zip in nodejs](https://stackoverflow.com/q/19718504/1366033)
* [Adding files into existing zipped archive with NodeJs zip-stream or archiver module](https://stackoverflow.com/q/22902901/1366033)
* [create a zip archive and unzip it in node.js](https://stackoverflow.com/q/5754153/1366033)

## Alternative NPM Zip Libraries

* Native [ZLib](https://nodejs.org/api/zlib.html)
* [jszip](https://www.npmjs.com/package/jszip) - [6,200 🟊s](https://github.com/Stuk/jszip)
* [archiver](https://www.npmjs.com/package/archiver) - [1,983 🟊s](https://github.com/archiverjs/node-archiver)
* [node-zip](https://www.npmjs.com/package/node-zip) - [211 🟊s](https://github.com/daraosn/node-zip)
* [node-native-zip](https://www.npmjs.com/package/node-native-zip)- [106 🟊s](https://github.com/janjongboom/node-native-zip)
* [easy-zip](https://www.npmjs.com/package/easy-zip)- [22 🟊s](https://github.com/owenchong/easy-zip)
* [zip-folder](https://www.npmjs.com/package/zip-folder)- [41 🟊s](https://github.com/sole/node-zip-folder)
