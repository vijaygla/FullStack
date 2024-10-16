const os = require("os");

console.log("Your System:",os.arch());


const freeMemory = os.freemem();
const totalMemory = os.totalmem();

console.log(`Your Free Space: ${freeMemory/1024/1024/1024}`)
console.log(`Your Total Space: ${totalMemory/1024/1024/1024}`);


console.log("your Host Name:",os.hostname());
console.log("Platform:",os.platform());
console.log("TempDir:",os.tmpdir());
console.log("Types_of_OS:",os.type());
