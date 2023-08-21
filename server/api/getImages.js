import { v2 as cloudinary } from 'cloudinary';

export default defineEventHandler(async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
        secure: true
    })

    try {
        const result = await cloudinary.search
            .expression('resource_type=image AND folder=2023-bbq-toronto/photos')
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
            photos: photos
        }
    } catch(error) {
        return {
            error: error
        }
    }
})