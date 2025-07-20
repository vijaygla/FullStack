import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderName = path.join(__dirname, 'FolderName');
const fileName = path.join(folderName, 'File.txt');


// write
fs.writeFileSync(fileName, 'This is an apple.txt file');

// read
fs.readFile(fileName, 'utf8', (error, item) => {
    console.log("🚀 ~ fs.readFile ~ item:", item)
});

// update
fs.appendFile(fileName, "❤️this is create by vijay kumar", (error) => {
    if(!error) console.log("file is updated successfully");
    else console.log("🚀 ~ fs.appendFile ~ error:", error)
});

// rename
fs.rename(fileName, `${folderName}/FileName.txt`, (error) => {
    if(!error) console.log("file name is updated successfully");
    else console.log("🚀 ~ fs.appendFile ~ error:", error)
})

// delete
fs.writeFileSync(`${folderName}/fruits.txt`, 'This is an fruits.txt file');
fs.unlinkSync(`${folderName}/fruits.txt`);
