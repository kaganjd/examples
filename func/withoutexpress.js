const html = (title, body) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div>
          <h1>${title}</h1>
          <h3>${body}</h3>
          <p>check the headers for the secret token (⊃｡•́‿•̀｡)⊃</p>
        </div>
      </body>
    </html>
  `;
};

exports.handler = async function(event, context) {
  try {
    const body = await html(
      "render some h1 stuff",
      "render some h3 stuff"
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
