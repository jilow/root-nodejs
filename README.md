[![Build Status](https://travis-ci.org/jilow/root-nodejs.svg?branch=master)](https://travis-ci.org/jilow/root-nodejs)

# root-nodejs

Node.js client library for using Root API. The full api documentation can be found [here](https://app.root.co.za/docs/insurance/api).

*This is not part of the official Root SDK.*

## Usage

Install the package:
```bash
# using NPM
npm i jilow/root-nodejs

# using yarn
yarn add jilow/root-nodejs
```

In your code:
```javascript
// ES modules
import * as Root from 'root-nodejs'
// CommonJS 
const Root = require('root-nodejs')

const client = new Root.InsuranceAPI(APP_ID, APP_TOKEN)

const gadgetModels = await client.listGadgetModels()
```


See the [wiki](https://github.com/jilow/root-nodejs/wiki) for further usage examples.

## Development

Want to contribute?

Install all the development dependencies:
```bash
# using NPM
npm install -d

# using yarn
yarn install -D
``` 

Edit some files and then run the tests:
```
# using NPM
npm test

# using yarn
yarn test
```

## License

This library is licensed under MIT.