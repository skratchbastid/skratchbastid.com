const mailjet = require('node-mailjet')
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello Greg! Let's figureo ut how to use Mailjet in here..." })
    }   
}
