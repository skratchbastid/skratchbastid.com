export const sendMemberDataToHive = async (member) => {
    const contactData = {
        email: member.email,
        firstName: member.firstName,
        lastName: member.lastName
    }
    
    return new Promise((resolve, reject) => {
        HIVE_SDK(
            'emailSignup',
            contactData,
            resolve,
            reject
        )
    })
}

export const sendEmailSignup = async (email) => {
    console.log('Sending email signup to Hive')
    const contactData = {
        email,
        // didOptIn: true
    }
    return new Promise((resolve, reject) => {
        HIVE_SDK(
            'emailSignup',
            contactData,
            resolve,
            reject
        )
    })
}

export const addProperty = async (property, value) => {
    const customData = {
        [property]: value
    }
    return new Promise((resolve, reject) => {
        HIVE_SDK(
            'customUserProperties',
            'update',
            customData,
            resolve,
            reject
        )
    })
}


