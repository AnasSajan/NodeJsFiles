const v8 = require('v8');

console.log(`Current directory: ${process.cwd()}`);
console.log(v8.getHeapStatistics().total_heap_size);

