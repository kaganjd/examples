const html = (p, s) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
      <h3>path when function is called directly with <code>https://examples.netlify.horse/.netlify/functions/return-path/*</code>:</h3>
      <p>${p}</p>
      <h3>path when function is proxied to:</h3>
      <p>${s}</p>
      </body>
    </html>
  `;
};

exports.handler = async function(event, context) {
    const pathParts = event.path.split('/')
    console.log(pathParts)
    const splatWithDirectFunctionCall = pathParts[4]
    const splatFromRedirect = pathParts[2]
    return {
      statusCode: 200,
      body: await html(splatWithDirectFunctionCall, splatFromRedirect)
    };
};
