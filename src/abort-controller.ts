// istanbul ignore file
let AbortController: new () => AbortController;

/* eslint-disable @typescript-eslint/no-var-requires */
const polyfill = require('abortcontroller-polyfill/dist/cjs-ponyfill');
/* eslint-enable @typescript-eslint/no-var-requires */
AbortController = polyfill.AbortController;

export = AbortController;
