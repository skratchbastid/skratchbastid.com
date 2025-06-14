const cloudinary = require('cloudinary').v2;

exports.handler = async function(event, context) {
    
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true
    })

    let folderName = event.queryStringParameters.folderName;
    console.log(event.queryStringParameters)
    if (!folderName) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'No folder name provided'
            })
        }
    }
    

    try {
        const result = await cloudinary.search
            .expression('resource_type=image AND folder=' + folderName + '/photos')
            .max_results(200)
            .execute()
        
        const photos = result.resources.map((image) => {
            return {
                url: image.url,
                asset_id: image.asset_id,
                public_id: image.public_id,
            }
        })

        return {
            statusCode: 200,
            body: JSON.stringify({
                photos: photos,
                greg: "Greg Bates"
            })
        }
    } catch(error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error
            })
        }
    }
}