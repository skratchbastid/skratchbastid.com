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
    const today = dayjs().startOf('day');
    const filteredEvents = events.filter((event) => {
        // Apply a one-day grace window when comparing dates
        const eventDate = dayjs(event.eventsFields.eventDate).add(1, 'day').startOf('day');
        return eventDate.isSameOrAfter(today, 'day');
    });

    // Sort events in ascending order by eventDate
    filteredEvents.sort((a, b) => {
        const dateA = dayjs(a.eventsFields.eventDate).add(1, 'day');
        const dateB = dayjs(b.eventsFields.eventDate).add(1, 'day');

        return dateA.diff(dateB);
    });
    
    return filteredEvents;    
}
  