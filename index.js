/**
 * @module  string-to-arraybuffer
 */

'use strict'

var atob = require('atob-lite')
var isBase64 = require('is-base64')
var assert = require('assert')
var decode = require('./decode')

module.exports = function stringToArrayBuffer (arg) {
	assert(typeof arg === 'string', 'Argument should be a string')

	//valid data uri
	if (/^data\:/i.test(arg)) return decode(arg)

	//base64
	if (isBase64(arg)) return base642ab(arg)

	//plain string
	return str2ab(arg)
}

function str2ab(str) {
	var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
	var bufView = new Uint16Array(buf);
	for (var i=0, strLen=str.length; i<strLen; i++) {
		bufView[i] = str.charCodeAt(i);
	}
	return buf;
}

function base642ab(str) {
	var binary = atob(str),
		array = new Uint8Array(binary.length);
	for(var i = 0; i < binary.length; i++) {
		array[i] = binary.charCodeAt(i);
	}
	return array.buffer
}
