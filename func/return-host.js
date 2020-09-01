exports.handler = async function (event, context) {
    console.log(event)
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
    try {
        return { 
            statusCode: 200, 
            body: headers
        }
    } catch (err) {
        return { 
            statusCode: 500, 
            body: err.toString() 
        }
    }
};