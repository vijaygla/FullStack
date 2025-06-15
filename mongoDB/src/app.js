const mongoose = require("mongoose");

// Connecting to the database without deprecated options
mongoose.connect("mongodb://localhost:27017/thapa1")
    .then(() => console.log("Connection successful..."))
    .catch((err) => console.log("Connection error: ", err));

// Define a MongoDB schema: in mongoes it define the structure of documents
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    video: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// Define a mongoose model
const Playlist = mongoose.model("Playlist", playlistSchema);

// Create and insert a document
const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name: "React js",
            ctype: "Frontend",
            video: 100,
            author: "Thapa",
            active: true,
        });

        const nodePlaylist = new Playlist({
            name: "Node js",
            ctype: "Backend",
            video: 50,
            author: "Thapa",
            active: true,
        });

        const mongoPlaylist = new Playlist({
            name: "mongose",
            ctype: "Backend",
            video: 100,
            author: "Thapa",
            active: true,
        });

        // save and print the documnets
        const result = await Playlist.insertMany([reactPlaylist, nodePlaylist, mongoPlaylist]);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}
// call the function after defined
// createDocument();



const getDocument = async () => {
    try {
        const result = await Playlist.find({ ctype: "Backend" })
            .select({ name: 1 })
            // .limit(1);
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }

    // Fetch documents with sort and count functionality
    const getDocument = async () => {
        try {
            // Fetch documents, sort by name in ascending order, and limit to 1 result
            const result = await Playlist.find({ ctype: "Backend" })
                .select({ name: 1 })
                .sort({ name: 1 })  // Sort by name in ascending order (1: ascending, -1: descending)
                .limit(1);

            console.log("Fetched Document:", result);

            // Count the number of documents that match the query
            const count = await Playlist.countDocuments({ ctype: "Backend" });
            console.log("Number of Backend documents:", count);
        } catch (err) {
            console.log(err);
        }
    }
}

getDocument();


