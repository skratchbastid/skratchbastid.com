const Mailjet = require('node-mailjet');
exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };
    if (event.httpMethod === 'OPTIONS') {
        // To enable CORS
        return {
         statusCode: 200, 
         headers,
         body: 'success'
       };
   }
    const mailjet = new Mailjet({
        apiKey: process.env.MJ_APIKEY_PUBLIC,
        apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });
    // const email = event.queryStringParameters.email
    const email = JSON.parse(event.body).email
    const source = JSON.parse(event.body).source || ''
    const city = JSON.parse(event.body).city || ''

    // Check to see if contact exists, if not create one!
    let contact = await findContact(email)
    if (!contact) {
        console.log("No contact, let's create one")
        contact = await createContact(email)
        contact = contact.contact
        if (!contact.success) {
            return {
                statusCode: 400,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Max-Age': '8640'
                },
                body: JSON.stringify({
                    status: 400,
                    message: "Invalid email address"
                })
            }
        }
        contact.new = true
    }

    // To do: See if contact is already subscribed
    // if (contact.new) {
    //     console.log("New contact, subscribe them")
    // } else {
    //     console.log("Existing contact, check subs")
    // }

    // Create the subscription
    try {
        await updateContact(contact.ID, source, city, contact.new)
    } catch (error) {
        console.log(error.message)
    }
    
    const subscription = await createSubscription(email)
    console.log(subscription)
    
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Max-Age': '8640'
        },
        body: JSON.stringify({ 
            success: true,
            contact,
            params: event.queryStringParameters
        }),
    }

    async function findContact(email) {
        const request = mailjet
            .get("contact", {'version': 'v3'})
            .id(email)
            .request()
        try {
            console.log("Find contact...")
            let response = await request
            return response.body.Data[0]
        } catch(err) {
            return null
        }
    }

    async function createContact(email) {
        const request = mailjet
            .post('contact')
            .request({
                Email: email,
                IsExcludedFromCampaigns: false
            })
    
        try{
            let response = await request
            return {
                success: true,
                contact: response.body.Data[0]
            }
        } catch(err) {
            return { 
                success: false,
                message: "Invalid email address"
            }
        }
    }

    async function getSubscriptions(email) {
        console.log(`Get subs for ${email}`)
        // const request = mailjet
        //     .get("contact", {'version': 'v3'})
        //     .id("greg@batesy.ca")
        //     .action("getcontactslists")
        //     .request()
        
        
        
        
        // const subResponse = await subRequest
        
        // console.log("Lists: ", response.body.Count)
    }

    async function createSubscription(email) {
        console.log("Create the sub!")
        try {
            const request = mailjet
            .post("contactslist", {'version': 'v3'})
            .id(4524)
            .action("managecontact")
            .request({
                "Action":"addforce",
                "Email":email
            })

            const response = await request
            return {
                success: true,
                message: "Subscription created"
            }
            // console.log(response.body)

            // TODO: Somehow create a double optin mechanism
            // const emailRequest = mailjet
            //     .post("send", {'version': 'v3'})
            //     .request({
            //     "FromEmail":"greg@batesy.ca",
            //     "FromName":"Skratch Bastid",
            //     "Recipients":[
            //         {
            //         "Email": email
            //         }
            //     ],
            //     "Subject":"Let's go!",
            //     "Text-part":"Let's figure out how to opt you in.",
            //     "Html-part":"<h3>DWhat up!</h3><br />Let's try to opt you in to this list somehow..."
            //     })
            
            // const emailResp = await emailRequest
            // console.log(emailResp.body)
        } catch (err) {
            return {
                success: false
            }
        }
    }

    async function updateContact(contactId, source, city, isNewContact) {
        
        const data = [
            {
                Name: "city",
                Value: city || ''
            }
        ]

        if (isNewContact) {
            data.push({
                Name: "source",
                Value: source || ''
            })
        }

        const request = mailjet
            .put("contactdata", {'version': 'v3'})
            .id(contactId)
            .request({
                Data: [
                    {
                        Name: "source",
                        Value: source || ''
                    },
                    {
                        Name: "city",
                        Value: city || ''
                    }
                ]
            })
        try {
            const response = await request
            console.log(response.body)
        } catch (err) {
            console.log("Dang")
        }
    }
}

