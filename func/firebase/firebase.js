var admin = require("firebase-admin");
var serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

exports.handler = function (event, context) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS).project_id,
            clientEmail: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS).client_email,
            privateKey: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS).private_key
            }),
        databaseURL: "https://fir-for-cmty-post-21977.firebaseio.com"
    });
    
    try {
        var db = admin.database()
        var ref = db.ref('flowers')
        var leaves = ref.child("leaves")
        leaves.set({
            1: "round",
            2: "oval",
            3: "symmetrical"
        })
        return { 
            statusCode: 200,
            body: 'Success!'
        }
    } catch (err) {
        return { 
            statusCode: 500, 
            body: err.toString() 
        }
    }
};