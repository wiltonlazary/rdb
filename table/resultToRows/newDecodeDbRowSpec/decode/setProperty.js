function act(c){
	c.newInitValue1 = {};
	c.newValue1 = 'newValue1';

	c.col1.purify.expect(c.newInitValue1).return(c.newValue1);

	// c.emitAlias1Changed = c.mock();
	// c.newEmitEvent.expect().return(c.emitAlias1Changed);
	
	// c.emitAlias1Changed.expect(c.sut, c.col1, c.newValue1, c.value1);	
	c.updateField.expect(c.table, c.col1, c.sut);

	c.emitArbitaryChanged.expect(c.sut, c.col1, c.newValue1, c.value1);	

	c.sut.alias1 = c.newInitValue1;
}

module.exports = act;