export async function subscribeEmail(email, source) {
    const data = { email, source: source || '' }
    if (!email) throw new Error('Email is required')

    const response = await fetch('/.netlify/functions/addContact', {
        method: 'POST', 
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = await response.json()
    return result
}