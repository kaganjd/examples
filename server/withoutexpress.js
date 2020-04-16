const html = (title, body, headers) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div>
          <h1>${body}</h1>
          <h2>${headers}</h2>
        </div>
      </body>
    </html>
  `;
};

exports.handler = async function(event, context) {
  try {
    const body = await html(
      "The functions title works",
      "the functions body works",
      `${response.headers}`
    );
    return { 
      headers: {
        "secret": process.env.API_SIGNATURE_TOKEN
      },
      statusCode: 200, 
      body };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
