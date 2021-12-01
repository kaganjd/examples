exports.handler = async function (event, context) {
    const queryStringParams = event.queryStringParams
    // console.log(queryStringParams)
    console.log("event:", event)
    console.log("context:",context)
  return {
    statusCode: 200,
    body: "🚀"
  };
};
