const html = (body, headers) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div>
          <h1>${body}</h1>
        </div>
      </body>
    </html>
  `;
};

exports.handler = async function(event, context) {
  try {
    return { 
      statusCode: 200, 
      body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};