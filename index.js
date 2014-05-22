var newParameterized = require('./table/query/newParameterized');
var newBoolean = require('./table/column/newBoolean');
var newDatabase = require('./newDatabase');
var table = require('./table');
var commit = require('./table/commit');
var rollback = require('./table/rollback');

var filter = newParameterized('');
filter = newBoolean(filter);

var connectViaPool = function(connectionString) {
	return newDatabase(connectionString);
};
connectViaPool.table = table;
connectViaPool.filter = filter;
connectViaPool.commit = commit;
connectViaPool.rollback = rollback;

module.exports = connectViaPool;
