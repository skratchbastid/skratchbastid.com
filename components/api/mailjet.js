export default function addSubscriber(request, response) {
    response.status(200).json({
        body: 'Subscriber Added'
    })
}