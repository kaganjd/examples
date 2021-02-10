// This is the main file for the Netlify Build plugin what-happened.
/* eslint-disable */
const NetlifyAPI = require("netlify");

/* eslint-disable no-unused-vars */
module.exports = {
  onError: async ({ error, utils }) => {
    const gUtil = utils.git;
    const currCommit = gUtil.commits[0];
    const prevCommit = gUtil.commits[1];

    const jsFiles = gUtil.fileMatch("**/*.js");
    const jsonFiles = gUtil.fileMatch("**/*.json");
    const fileTypes = [jsFiles, jsonFiles];

    for (const fileType of fileTypes) {
      if (fileType.deleted.length !== 0) {
        logEach("deleted", fileType.deleted);
      }
      if (fileType.created.length !== 0) {
        logEach("created", fileType.created);
      }
    }
    logEach("modified", gUtil.modifiedFiles);

    function logEach(updateType, filesArray) {
      console.log(`Files ${updateType}:`);
      for (f of filesArray) {
        console.log(`- ${f}`);
      }
    }

    const branch = process.env.BRANCH;
    const siteId = process.env.SITE_ID;
    const token = process.env.NETLIFY_AUTH_TOKEN;
    const siteName = process.env.SITE_NAME;
    let linkToLogsMostRecentSuccessfulDeploy = "";

    const client = new NetlifyAPI(token);
    const response = await client
      .listSiteDeploys({ site_id: siteId })
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
