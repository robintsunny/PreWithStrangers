export const rsvpSelector = (rsvps, eventId) => {
  let res = [];

  for (let id in rsvps) {
    if (rsvps[id].event_id === eventId) {
      res.push(rsvps[id]);
    }
  }
  return res;
};
