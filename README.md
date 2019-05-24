# NodeJS-Addon-Examples

Examples for NodeJS C++ Addons, copy + pasted from https://nodejs.org/api/addons.html

# Setup

`node-gyp` npm package is required.

If you do not have NodeJS (which contains `npm`) please download it here https://nodejs.org/en/download/ <br/>
Windows does not come with NodeJS but Linux and macOS do

To install `node-gyp` run
```
npm install --global node-gyp
```

Then follow the instructions for your platform ("On Unix", "On macOS", "On Windows") here https://www.npmjs.com/package/node-gyp

# Usage

Once `node-gyp` is installed you can run each example with the following commands
```
node-gyp configure build
node test.js
```
