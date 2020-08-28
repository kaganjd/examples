exports.handler = async function (event, context, callback) {
    const generateHtml = (host, userAgent) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            <p>🚀 host ---> ${host}</p>
            <p>🔎 user-agent ---> ${userAgent}</p>
        </body>
        </html>
    `;
    };
    const headers = await generateHtml(`${event.headers["host"]}`, `${event.headers["user-agent"]}`);
    callback(null, {
            statusCode: 200, 
            body: headers
    });
};