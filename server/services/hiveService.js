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

const hiveSdkCall = (method, ...args) => {
  return new Promise((resolve, reject) => {
    console.log(`[Hive SDK] start`, method, args);
    let isSettled = false;
    const timeoutMs = 12000;

    const cleanup = () => {
      isSettled = true;
      clearTimeout(timeout);
    };

    const timeout = setTimeout(() => {
      if (!isSettled) {
        isSettled = true;
        console.error(`[Hive SDK] timeout (${timeoutMs}ms)`, method);
        reject(new Error(`Hive SDK timeout for ${method}`));
      }
    }, timeoutMs);

    const resolveWrapped = (res) => {
      if (isSettled) return;
      cleanup();
      console.log(`[Hive SDK] success`, method, res);
      resolve(res);
    };

    const rejectWrapped = (err) => {
      if (isSettled) return;
      cleanup();
      console.error(`[Hive SDK] reject`, method, err);
      reject(err);
    };

    try {
      if (typeof HIVE_SDK === 'undefined') {
        throw new Error('HIVE_SDK is not defined yet');
      }
      HIVE_SDK(method, ...args, resolveWrapped, rejectWrapped);
    } catch (err) {
      cleanup();
      console.error(`[Hive SDK] call error`, method, err);
      reject(err);
    }
  });
};

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
      const signupResult = await hiveSdkCall("emailSignup", contactData);
      console.log("Email signup succeeded", signupResult);
    } catch (error) {
      console.error("Email signup failed", error);
      throw error; // important: fail if email signup fails
    }

    // Add to segment in background so UI doesn't wait for possible Hive latency
    const segmentName = `BBQ Buyers - ${contactData.city}`;
    hiveSdkCall("addToSegment", segmentName, contactData)
      .then(segmentResult => {
        console.log("Add to segment succeeded (async)", segmentResult);
      })
      .catch(error => {
        console.warn("Add to segment failed (non-fatal async)", error);
      });

    console.log("Successfully signed up to Hive (email primary done; segment async).");
};

export const sendToHiveCTA = async (formElement) => {
  console.log("Sending signup form to Hive...", formElement)

  return new Promise((resolve, reject) => {
    HIVE_SDK("submitSignupForm", formElement, resolve, reject)
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


