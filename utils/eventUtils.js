// utils/eventUtils.js
import { useDayjs } from '#dayjs' // not need if you are using auto import
const dayjs = useDayjs()

export function filterAndSortEventsByDate(events) {
    // const currentDate = new Date();
    // currentDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for accurate date comparison

    // const filteredEvents = events.filter((event) => {
    //     const eventDate = new Date(event.eventDate);
    //     return eventDate >= currentDate;
    // });

    // // Sort events in ascending order by eventDate
    // filteredEvents.sort((a, b) => {
    //     const dateA = new Date(a.eventDate);
    //     const dateB = new Date(b.eventDate);

    //     if (dateA < dateB) return -1;
    //     if (dateA > dateB) return 1;
    //     return 0;
    // });
    // Refactor to use dayjs for filtering and sorting
    const filteredEvents = events.filter((event) => {
        const eventDate = dayjs(event.eventDate);
        return eventDate.isSameOrAfter(dayjs(), 'day') || eventDate.isToday();
    });

    // Sort events in ascending order by eventDate
    filteredEvents.sort((a, b) => {
        const dateA = dayjs(a.eventDate);
        const dateB = dayjs(b.eventDate);

        return dateA.diff(dateB);
    });
    
    return filteredEvents;    
}
  