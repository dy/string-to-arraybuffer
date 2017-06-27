# string-to-arraybuffer [![unstable](https://img.shields.io/badge/stability-unstable-orange.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/string-to-arraybuffer.svg)](https://travis-ci.org/dfcreative/string-to-arraybuffer)

Turn dataURI/base64/plain string into an _ArrayBuffer_.

[![npm install string-to-arraybuffer](https://nodei.co/npm/string-to-arraybuffer.png?mini=true)](https://npmjs.org/package/string-to-arraybuffer/)

```js
var str2ab = require('string-to-arraybuffer')

// Turn plain 'Hello World!' into ArrayBuffer
var abuf1 = str2ab('Hello World!')

// Base-64 'Hello World!'
var abuf2 = str2ab('SGVsbG8sIFdvcmxkIQ%3D%3D')

// Bare-bones data-uri 'Hello World!'
var abuf3 = str2ab('data:,Hello%2C%20World!')

// Base-64 data-uri 'Hello World!'
var abuf4 = str2ab('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')

//
```

Node: charsets decoding in browser relies on [TextDecoder API](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/TextDecoder), so if you need support of custom charsets in old browsers, please include [text-encoding](https://github.com/inexorabletash/text-encoding) polyfill.

### Related

* [data-uri-to-buffer](https://www.npmjs.com/package/data-uri-to-buffer) − decode URI string in node.
* [to-array-buffer](https://www.npmjs.com/package/to-array-buffer) − convert anything to ArrayBuffer.
