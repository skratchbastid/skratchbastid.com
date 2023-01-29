const Mailjet = require('node-mailjet');
exports.handler = async function(event, context) {
    const mailjet = new Mailjet({
        apiKey: process.env.MJ_APIKEY_PUBLIC || '889cd83ccd0cb897240c938c0d8fe98e',
        apiSecret: process.env.MJ_APIKEY_PRIVATE || '4a541c442e683fd53a5cf1f63498f096',
    });
    const email = event.queryStringParameters.email

    // Check to see if contact exists, if not create one!
    let contact = await findContact(email)
    if (!contact) {
        console.log("No contact, let's create one")
        contact = await createContact(email)
        contact.new = true
    }

    // To do: See if contact is already subscribed
    if (contact.new) {
        console.log("New contact, subscribe them")
    } else {
        console.log("Existing contact, check subs")
    }

    // Create the subscription
    const subscription = await createSubscription(email)
    console.log(subscription)
    
    return {
        statusCode: 200,
        body: JSON.stringify({ 
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
            // console.log(response.body.Data)
            return response.body.Data[0]
        } catch(err) {
            return null
        }
    }

    async function createContact(email) {
        console.log(`Create contact: ${email}`, console.log(typeof email))
        const request = mailjet
            .post('contact')
            .request({
                Email: email,
                IsExcludedFromCampaigns: false
            })
    
        try{
            console.log("Lets try this...")
            let response = await request
            return response.body.Data[0]
        } catch(err) {
            console.log("Nah son!", err)
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
        const request = mailjet
            .post("contactslist", {'version': 'v3'})
            .id(10289282)
            .action("managecontact")
            .request({
                "Name": "Greg Bates",
                "Action":"addforce",
                "Email":email
            })
        
        const response = await request
        console.log(response.body)
    }
}

