var when = require('a').when;
var c = {};

when(c)
	.it('should expand parent').assertDoesNotThrow(c.parentRow.expand.verify)