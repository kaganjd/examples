const path = require("path");
const fs = require("fs");

exports.handler = async function (event, context) {
    console.log(path.resolve(__dirname +'/rfc2468.pdf'))
    const pathToPDF = path.resolve(__dirname +'/rfc2468.pdf')
    console.log(fs.existsSync(pathToPDF))
    const pdf = fs.readFileSync(pathToPDF)

    try {
        return { 
            statusCode: 200, 
            headers: {'Content-type' : 'application/pdf'},
            isBase64Encoded: true,
            body: pdf.toString('base64')
        }
    } catch (err) {
        return { 
            statusCode: 500, 
            body: err.toString() 
        }
    }
};