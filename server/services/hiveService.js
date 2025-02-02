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

export const sendToHive = async (formData) => {
    console.log("Sending data to Hive.co:", formData);
    
    const contactData = {
      email: formData.email,
      firstName: formData.name,
      phoneNumber: formData.phone,
      zipCode: formData.zip,
      city: formData.city,
      didOptIn: true, // Assicurati che l'utente abbia dato il consenso
    };

    try {
      await Promise.all([
        new Promise((resolve, reject) => {
          HIVE_SDK("emailSignup", contactData, resolve, reject);
        }),
        new Promise((resolve, reject) => {
          HIVE_SDK("addToSegment", `BBQ Buyers - ${contactData.city}`, contactData, resolve, reject);
        })
      ]);

      console.log("Successfully signed up to Hive and added to segment.");
    } catch (error) {
      console.error("Error sending data to Hive:", error);
      throw error; // Propaga l'errore per essere gestito nel `submitForm`
    }
};


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


