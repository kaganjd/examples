var Buffer = require( "buffer" ).Buffer;

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

exports.handler = async function ( event, context ) {

	// Normalize body into a Buffer.
	var bodyBuffer = ( event.body instanceof Buffer )
		? event.body
		: Buffer.from( event.body, ( event.isBase64Encoded ? "base64" : "utf8" ) )
	;

	// Create a copy of the event for echoing that won't include the massive body.
	var eventCopy = { ...event };
	delete( eventCopy.body );

	return({
		statusCode: 200,
		body: JSON.stringify({
			contentLength: ( +event.headers[ "content-length" ] || "not-provided" ),
			bodyLength: bodyBuffer.length,
			eventCopy: eventCopy
		})
	});

} 