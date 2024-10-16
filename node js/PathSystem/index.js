const path = require("path");

console.log("My DirName:",path.dirname("D:\Development\node_js_youtube\node_js_github\PathSystem\index.js"));
console.log("My Extention Name:",path.extname("D:\Development\node_js_youtube\node_js_github\PathSystem\index.js"));
console.log("My Base Name:",path.basename("D:\Development\node_js_youtube\node_js_github\PathSystem\index.js"));

const myPath = path.parse("D:\Development\node_js_youtube\node_js_github\PathSystem\index.js");

console.log("My path is :",myPath);
console.log("My Module Name ",myPath.root);
