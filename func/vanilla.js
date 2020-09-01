exports.handler = async function(event, context) {
    const headerKey = "header value"
    const s = 200
    const b = {firstKey: "first value", secondKey: "second value"}
    const j = JSON.stringify(b)
    return { 
      headers: {headerKey: headerKey},
      // this returns the same thing: 
      // headers: {headerKey}
      statusCode: s, 
      body: j
      // this also works:
      // body: "any old string"
    };
};
