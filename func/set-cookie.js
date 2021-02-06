exports.handler = async function () {
  return {
    statusCode: 200,
    headers: { "set-cookie": "cookieName=cookieValue; SameSite=None; Secure" },
  };
};
