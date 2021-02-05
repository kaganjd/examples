// This is the main file for the Netlify Build plugin what-happened.
const NetlifyAPI = require('netlify')

/* eslint-disable no-unused-vars */
module.exports = {
  onError: async ({ netlifyConfig, error, utils}) => {
      gUtil = utils.git
      currCommit = gUtil.commits[0]
      prevCommit = gUtil.commits[1]

      console.log(`Modified files: ${gUtil.modifiedFiles}`)
      const jsFiles = gUtil.fileMatch('**/*.js')
      const jsonFiles = gUtil.fileMatch('**/*.json')
      const fileTypes = [jsFiles, jsonFiles]

      for (const fileType of fileTypes) {
        if (fileType.deleted.length !==0) {
            console.log(`Files deleted: ${fileType.deleted}`)
        }
        if (fileType.created.length !==0) {
            console.log(`Files created: ${fileType.created}`)
        }
      }
      const configEnv = netlifyConfig.build.environment
      const branch = configEnv.BRANCH 
      const siteId = configEnv.SITE_ID
      const token = configEnv.NETLIFY_PAT
      const siteName = configEnv.SITE_NAME
      let linkToLogsMostRecentSuccessfulDeploy = ''

      const client = new NetlifyAPI(token)
      //TODO: may need to add pagination params to this call if we don't get enough
      //notes: 
      // - would be cool to be able to use deploy.rollback_id
      // - can't iterate backward through deploys array
      const response = await client.listSiteDeploys({siteId: siteId})
        .then(deploys => {
          for (const d of deploys) {
            if (d.branch == branch && d.published_at) {
              return linkToLogsMostRecentSuccessfulDeploy = `https://app.netlify.com/sites/${siteName}/deploys/${d.id}`
            }
          }
        })
        .catch((e) => console.log(e))
    
      if (prevCommit) {
        console.log(`previous commit sha: ${prevCommit.sha}`)
        console.log(`previous commit message: ${prevCommit.message}`)
      } else {
        console.log('No previous commit')
      }

      console.log(`link to last successful deploy on this branch: ${linkToLogsMostRecentSuccessfulDeploy}`)
    },
}
