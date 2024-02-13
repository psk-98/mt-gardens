export const sortUpcomingEvents = (data) => {
  let eventsArray = []

  for (let i = 0; i < data?.length; i++) {
    let currentEventDates = data[i]?.eventDates

    if (currentEventDates?.length > 0) {
      for (var x = 0; x < currentEventDates?.length; x++) {
        let tempObject = {
          id: data[i]._id,
          name: data[i]?.name,
          date: currentEventDates[x],
          startTime: data[i]?.startTime[0],
          imageUrl: data[i]?.coverImageUrl,
          price: data[i]?.price,
        }

        eventsArray = [tempObject, ...eventsArray]
      }
    }
  }

  let sortedByDate = eventsArray.sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })

  return sortedByDate
}
