const execSync = require('child_process').execSync;
const result = execSync('ls -la ./').toString();
console.log(result);
const result2 = execSync('reg-suit -h').toString();
console.log(result2);