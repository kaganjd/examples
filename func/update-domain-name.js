const NetlifyAPI = require('netlify')

exports.handler = async function (event, context) {
  const client = new NetlifyAPI(process.env.NETLIFY_PAT)
  const site = await client.updateSite({
      site_id: "628de7ef-04fb-4530-a7da-b795c0e5a457",
      body: { 
          domain_aliases: ["flippers.netlify.horse"] 
        }
    })
    .then(data => console.log(data))
    .catch((e) => console.log('Error updating domain alias', e))
}