const html = (body) => {
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

exports.handler = async function () {
  try {
    const body = await html(process.env.DEPLOY_PREVIEW_KEY);
    return {
      statusCode: 200,
      body,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
