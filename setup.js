// const { exec } = require('child_process');

// /* Determine if we are on the dev branch and set environment accordingly */
// exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
//     if (err) {
//         console.log("Something went wrong in setup.js. See error below:")
//         console.log(err)
//     }
//     // If branch name contains 'dev', assume we should use the dev environment variables
//     if (typeof stdout === 'string' && (stdout.trim().indexOf('dev') > -1 )) {
//       console.log(`You're on a dev branch. Using .env.development.`);
//       process.NODE_ENV = 'development'
//     }
// });