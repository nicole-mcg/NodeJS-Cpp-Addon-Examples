# NodeJS-Addon-Examples

Examples for NodeJS C++ Addons, copy + pasted from https://nodejs.org/api/addons.html

# Setup

`node-gyp` npm package is required.
Windows does not come with NodeJS which contains `npm`, if you do not have NodeJS please download it here https://nodejs.org/en/download/

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
