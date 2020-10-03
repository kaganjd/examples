var admin = require("firebase-admin");

var serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

exports.handler = async function (event, context) {
    try {
        console.log('pre-init')
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://fir-for-cmty-post-21977.firebaseio.com"
        });
        console.log('init complete)')
        console.log(admin.app().name)
        return { 
            statusCode: 200,
        }
    } catch (err) {
        return { 
            statusCode: 500, 
            body: err.toString() 
        }
    }
};