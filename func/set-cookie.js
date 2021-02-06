exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      headers: {"set-cookie": "cookieName=cookieValue; SameSite=None; Secure"}
    };
};