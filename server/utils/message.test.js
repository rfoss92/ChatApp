var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Jen';	
		var lon = 15;
	    var lat = 19;
	    var url = 'https://www.google.com/maps?g=15,19'
  		var message = generateLocationMessage(from, lon, lat);	 

	    expect(message.createdAt).toBeA('number');
	    expect(message).toInclude({from, url});

	});
});	