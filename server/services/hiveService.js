export const sendMemberDataToHive = async (member) => {
    return {
        status: 'success',
        message: 'Member data sent to Hive'
    }
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

export const addAdminProperty = async () => {
    console.log('Adding admin property to Hive')
    const customData = {
        'admin': 'true'
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


