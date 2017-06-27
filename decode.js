'use strict'

var uri2buf = require('data-uri-to-buffer')

module.exports = function (str) {
	var buf = uri2buf(str)
	var abuf = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);

	abuf.type = buf.type
	abuf.charset = buf.charset

	return abuf
}
