exports.handler = async function (event) {
    const queryStringParams = event.queryStringParams
    console.log(queryStringParams)
  return {
    statusCode: 200,
    body: "🚀"
  };
};
