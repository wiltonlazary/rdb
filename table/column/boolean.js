var newEncode = require('./boolean/newEncode');
var newDecode = require('./newDecodeCore');

function _new(column) {
	column.default = false;
	column.encode = newEncode(column);
	column.decode = newDecode(column);
}

module.exports = _new;