export const getMember = async (id) => {
    const url = `https://wp.skratchbastid.com/wp-json/mp/v1/members/${id}`
    const response = await fetch(url, {
        headers: {
            'MEMBERPRESS-API-KEY': `${process.env.MEMBERPRESS_API_KEY}`
        }
    })
    const data = await response.json()

    // Get the member location, phone, DJ info

    return data
}