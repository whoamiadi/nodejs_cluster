const assert = require('assert');

const appName = process.env.APP_NAME || 'TestApp';

assert.ok(appName, 'APP_NAME kell legyen');
console.log('Test passed! APP_NAME:', appName);
process.exit(0);
