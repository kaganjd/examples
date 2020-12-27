exports.handler = async function(event, context) {
    const cookieVal = "boop"
    console.log(cookieVal)
    return {
      statusCode: 200,
      headers: {"set-cookie": "cookieName=cookieValue; HttpOnly"}
    };
};