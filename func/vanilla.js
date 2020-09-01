exports.handler = async function(event, context) {
    const headerKey = "header value"
    const s = 200
    const b = "this is a string!"
    return { 
      headers: {headerKey},
      statusCode: s, 
      b
    };
};
