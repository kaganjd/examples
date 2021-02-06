// This is the main file for the Netlify Build plugin what-happened.
/* eslint-disable */
const NetlifyAPI = require("netlify");

/* eslint-disable no-unused-vars */
module.exports = {
  onError: async ({ netlifyConfig, error, utils }) => {
    const gUtil = utils.git;
    const currCommit = gUtil.commits[0];
    const prevCommit = gUtil.commits[1];

    const jsFiles = gUtil.fileMatch("**/*.js");
    const jsonFiles = gUtil.fileMatch("**/*.json");
    const fileTypes = [jsFiles, jsonFiles];

    for (const fileType of fileTypes) {
      if (fileType.deleted.length !== 0) {
        console.log(`Files deleted: ${fileType.deleted}`);
      }
      if (fileType.created.length !== 0) {
        console.log(`Files created: ${fileType.created}`);
      }
    }
    console.log(`Files modified: ${gUtil.modifiedFiles}`);

    const configEnv = netlifyConfig.build.environment;
    const branch = configEnv.BRANCH;
    const siteId = configEnv.SITE_ID;
    const token = configEnv.NETLIFY_PAT;
    const siteName = configEnv.SITE_NAME;
    let linkToLogsMostRecentSuccessfulDeploy = "";

    const client = new NetlifyAPI(token);
    const response = await client
      .listSiteDeploys({ siteId: siteId })
      .then((deploys) => {
        for (const d of deploys) {
          if (d.branch == branch && d.published_at) {
            return (linkToLogsMostRecentSuccessfulDeploy = `https://app.netlify.com/sites/${siteName}/deploys/${d.id}`);
          }
        }
      })
      .catch((e) => console.log(e));

    if (prevCommit) {
      console.log(`Previous commit SHA: ${prevCommit.sha}`);
      console.log(`Previous commit message: ${prevCommit.message}`);
    } else {
      console.log("No previous commit");
    }

    console.log(
      `Logs for last successful deploy on this branch: ${linkToLogsMostRecentSuccessfulDeploy}`
    );
  },
};
