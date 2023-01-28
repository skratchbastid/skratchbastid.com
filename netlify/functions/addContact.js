const Mailjet = require('node-mailjet');
exports.handler = async function(event, context) {
    console.log("testing")
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
    

    request
        .then((result) => {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "It worked maybe?"})
            }   
        })
        .catch((err) => {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Error"})
            }   
        })
}
