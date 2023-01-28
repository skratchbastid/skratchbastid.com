exports.handler = async function(event, context) {
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({ message: "Hello Greg!" })
    // }
    const mailjet = require('node-mailjet')
    return {
        statusCode: 200,
        body: mailjet,
        test: "Greg"
    }   
}
