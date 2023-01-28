const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  )
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello Greg! Let's figureo ut how to use Mailjet in here..." })
    }   
}
