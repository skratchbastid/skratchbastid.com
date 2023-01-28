const Mailjet = require('node-mailjet');
exports.handler = async function(event, context) {
    const mailjet = new Mailjet({
        apiKey: process.env.MJ_APIKEY_PUBLIC,
        apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });
    const request = mailjet
        .post('contact')
        .request({
          Email: "passenger@mailjet.com",
          IsExcludedFromCampaigns: true,
          Name: "New Contact"
        })
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello Greg! Let's figureo ut how to use Mailjet in here..."})
    }   
}
