# deepcopy [![Build Status](https://travis-ci.org/sasaplus1/deepcopy.png)](https://travis-ci.org/sasaplus1/deepcopy)

library of deep copy

## Installation

### npm

    $ npm install deepcopy

### bower

    $ bower install deepcopy

## Usage

```js
var deepcopy = require('deepcopy');

var source = {
  data: {
    number: 123,
    string: 'a',
    boolean: true,
    null: null,
    undefined: undefined,
    date: new Date,
    regexp: /regexp/ig,
    array: [
      [ 123, 'abc', false ],
      [ new Date, /node/i ],
      { array: [] }
    ],
    object: {
      number: 123, string: 'abc', boolean: false
    },
    to: undefined
  }
};

source.data.to = source;

var shallow = source,
    deep = deepcopy(source);

delete source.data;

console.dir(source);
// {}
console.dir(shallow);
// {}
console.log(
    require('util').inspect(deep, {depth: null}));
// { data:
//    { number: 123,
//      string: 'a',
//      boolean: true,
//      null: null,
//      undefined: undefined,
//      date: Sun May 26 2013 16:16:32 GMT+0900 (JST),
//      regexp: /regexp/gi,
//      array:
//       [ [ 123, 'abc', false ],
//         [ Sun May 26 2013 16:16:32 GMT+0900 (JST), /node/i ],
//         { array: [] } ],
//      object: { number: 123, string: 'abc', boolean: false },
//      to: [Circular] } }
```

## Functions

### deepcopy(target)

* `target` any types - target of copy
* `return` any types - copied object from target

get deep copy of target.

return deep copy if target is Date, RegExp or primitive types.
return shallow copy if target is function.

do recursive copy if target is Array or Object.
also can copy if target has circular reference.

## Test

### test for node.js

    $ npm install
    $ npm test

### test for browser

    $ npm install
    $ npm run-script mini
    $ npm run-script bower
    $ npm run-script testem

## License

The MIT License. Please see LICENSE file.
