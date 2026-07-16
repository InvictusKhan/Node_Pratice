
import fs from 'fs';
console.log("BEFORE");
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    console.log("CALLBACK RAN");
    if (err) console.log("READ FAILED:", err.message);
    else console.log("CONTENTS:", data);
});
console.log("AFTER");