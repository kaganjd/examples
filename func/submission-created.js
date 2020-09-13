const NetlifyAPI = require('netlify')

exports.handler = async function (event, context) {
  const client = new NetlifyAPI(process.env.NETLIFY_PAT)

  const submissions = await client.listSiteSubmissions({
      site_id: "628de7ef-04fb-4530-a7da-b795c0e5a457"
    })
    .catch((e) => console.log('Error getting submissions', e))

  if (submissions.length) {
    for (i = 0; i < submissions.length; i++) {
      console.log('starting to delete submission: ', submissions[i].id)
      await client.deleteSubmission({ submission_id: submissions[i].id })
      console.log('deleted submission: ', submissions[i].id)
    }
  } else {
    console.log('NOTHING TO DELETE')
  }
}