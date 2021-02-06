exports.handler = async function (event) {
  console.log(event.headers);
  const html = `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
            <body>
                see <a href="https://app.netlify.com/sites/elastic-lalande-888212/functions/log-headers">function logs</a> for request headers
            </body>
        </html>
    `;
  return {
    statusCode: 200,
    body: html,
  };
};
