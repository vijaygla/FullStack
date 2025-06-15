const fs = require("fs");

// Create a file and write something in it
fs.writeFile("file.txt", "Default work in Node.js because it is single-threaded", (err) => {
    if (err) {
        console.error("Error creating the file:", err);
        return;
    }
    console.log("File is created");

    // Append to the created file
    fs.appendFile("file.txt", " This is from Thappa Technical", (err) => {
        if (err) {
            console.error("Error appending to the file:", err);
            return;
        }
        console.log("File is appended");

        // Read the file
        fs.readFile("file.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error reading the file:", err);
                return;
            }
            console.log("File content:", data);

            // Rename the file
            fs.rename("file.txt", "newFileAsync.txt", (err) => {
                if (err) {
                    console.error("Error renaming the file:", err);
                    return;
                }
                console.log("File is renamed to 'newFile.txt'");
            });
        });
    });
});
